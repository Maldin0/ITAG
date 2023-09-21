import pgPromise from 'pg-promise';
import bcrypt from 'bcrypt';

const db = pgPromise()({
    host: '161.246.127.24',
    port: 9077,
    database: 'dbitag',
    user: 'clmtbmrw30079bsmnfdwi4ovp',
    password: 'YcVOt4I2p6X3YTDXNltyKgxN'
});

export default class User {
    user_id: number | undefined;
    username: string | undefined;
    password: string;
    email: string | undefined;

    constructor(usernameOrEmail: string, password: string) {
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
//     TODO: Finish this
//     TODO: User Validation
//     TODO: User Session Management
}
