import * as bcrypt from 'bcryptjs-react';
import DBConnection from "./DBConnection";
import Character from "./Character";
import {IDatabase} from "pg-promise";



export default class User {
    get char(): Character[] {
        return this._char;
    }
    get user_id(): number {
        return this._user_id;
    }

    set user_id(value: number) {
        this._user_id = value;
    }
    private db: IDatabase<unknown>;
    private _user_id!: number;
    username: string | undefined;
    email: string | undefined;
    password: string;
    private _char : Character[]=[];

    constructor(usernameOrEmail: string = 'usernameOrEmail', password: string = 'password') {
        this.db = DBConnection.getInstance().getDB();
        if (usernameOrEmail.includes('@')) {
            this.email = usernameOrEmail;
        } else {
            this.username = usernameOrEmail;
        }
        this.password = password;
    }

    async login() {
        try {
            await this.db.tx(async (t) => {
                let query;
                let values;

                if (this.email) {
                    query = 'SELECT * FROM accounts WHERE email = $1';
                    values = [this.email];
                } else if (this.username) {
                    query = 'SELECT * FROM accounts WHERE username = $1';
                    values = [this.username];
                } else {
                    console.error('No username or email provided for login.');
                    return;
                }

                const userData = await t.oneOrNone(query, values);

                if (!userData) {
                    console.error('User not found.');
                    return;
                }

                const passwordMatch = await bcrypt.compare(this.password, userData.password);

                if (passwordMatch) {
                    this._user_id = userData.user_id;
                    this.email = userData.email;

                    await t.none('UPDATE accounts SET last_login = NOW() WHERE user_id = $1', [userData._user_id]);

                    console.log('Login successful.');
                } else {
                    console.error('Invalid username/email or password.');
                }
            });
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    async regis(username: string, email: string, password: string) {
        try {
            const existingUser = await this.db.oneOrNone('SELECT * FROM accounts WHERE username = $1 OR email = $2', [username, email]);

            if (existingUser) {
                console.error('User already exists.');
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await this.db.tx(async (t) => {
                const query = 'INSERT INTO accounts (username, email, password, created_on) VALUES ($1, $2, $3, NOW())';
                const values = [username, email, hashedPassword];

                await t.none(query, values);

                console.log('User registered successfully!');
            });
        } catch (error) {
            console.log('Error registering user:', error);
        }
    }



    async getCharacter() {
        try {
            if (!this._user_id) {
                console.error('User is not logged in or user_id is missing.');
                return;
            }

            await this.db.tx(async (t) => {
                const query = 'SELECT user_id,cha_id FROM characters WHERE user_id = $1';

                const charData = await t.manyOrNone(query, this._user_id);
                
                if (charData && charData.length > 0) {                 
                    for(const cha of charData){
                        const temp = new Character(cha.user_id);
                        temp.char_id = cha.cha_id;
                        this._char.push(temp);
                    }
                    console.log('Chardata load successfully.')
                }
                else{
                    console.log('this user has no character.')
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
}
