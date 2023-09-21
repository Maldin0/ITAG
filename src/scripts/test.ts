// Import your User class
import User from './User';

// Create an instance of the User class and test its methods
const user = new User('newuser@example.com', 'newpassword');

// Test the login method
user.login()
    .then(() => {
        // If login is successful, you can perform further tests or UI integration here
        console.log('Login successful');
    })
    .catch((error) => {
        console.error('Error logging in:', error);
    });

// Test the registration method
