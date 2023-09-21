// test.ts
import User from '../src/scripts/User'; // Adjust the import path as needed

async function main() {
    try {
        // Create a new User instance with a username or email and password
        const user = new User('usernameOrEmail', 'password');

        // Attempt to log in
        await user.login();

        // Do something after a successful login
        if (user.user_id) {
            console.log('Logged in user ID:', user.user_id);
        } else {
            console.log('User not logged in.');
        }

        // Example: Register a new user
        // await user.regis('newUsername', 'newEmail', 'newPassword');

    } catch (error) {
        console.error('Error:', error);
    }
}

main();
