// Import your User class
import User from './User';

// Create an instance of the User class and test its methods
const user = new User('newuser@example.com', 'newpassword');

// Test the login method
const startTime = performance.now();

user.regis('newuser', 'newuser@example.com', 'newpassword')
    .then(() => {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Registration completed in ${executionTime} milliseconds`);
        console.log('Registered');
    })
    .catch((error) => {
        console.error('Error Registering:', error);
    });


// Test the registration method
