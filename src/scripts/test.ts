// Import your User class
import User from './User';

// Create an instance of the User class and test its methods
const user = new User('65070014@kmitl.ac.th', 'inwsussus550');

// Test the login method
const startTime = performance.now();

user.login()
    .then(() => {
        console.log('Logged in');
        user.getCharacter()
        .then(() =>{
            console.log('get character complete.')
        })
    })
    .catch((error) => {
        console.error('Error Registering:', error);
    });


// Test the registration method
