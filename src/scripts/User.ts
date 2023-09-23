import * as bcrypt from 'bcrypt';
import {IDatabase} from "pg-promise";
import Character from "./Character";





const pgPromise = require('pg-promise');

const db : IDatabase<unknown>= pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});


export default class User {

    user_id: number | undefined;
    username: string | undefined;
    email: string | undefined;
    password: string;
    char : Character[] | undefined;

    constructor(usernameOrEmail: string = 'usernameOrEmail', password: string = 'password') {
        if (usernameOrEmail.includes('@')) {
            this.email = usernameOrEmail;
        } else {
            this.username = usernameOrEmail;
        }
        this.password = password;
    }

    async login() {
        try {
            await db.tx(async (t) => {
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
                    this.user_id = userData.user_id;
                    this.email = userData.email;

                    await t.none('UPDATE accounts SET last_login = NOW() WHERE user_id = $1', [userData.user_id]);

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
            const existingUser = await db.oneOrNone('SELECT * FROM accounts WHERE username = $1 OR email = $2', [username, email]);

            if (existingUser) {
                console.error('User already exists.');
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await db.tx(async (t) => {
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
            if (!this.user_id) {
                console.error('User is not logged in or user_id is missing.');
                return;
            }

            await db.tx(async (t) => {
                const query = 'SELECT * FROM characters WHERE user_id = $1';

                const charData = await db.manyOrNone(query, this.user_id);

                if (charData && charData.length > 0) {
                    this.char = charData;
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
}
