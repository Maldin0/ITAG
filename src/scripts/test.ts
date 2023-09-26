// Import your User class
import User from './User';
import Character from './Character';

// Create an instance of the User class and test its methods
const user = new User('65070011@kmitl.ac.th', 'chefianhaters');

// Test the login method

user.login()
    .then(() => {
        console.log('Logged in');
        user.getCharacter()
            .then(()=>{
                console.log('got character');
                const char = user.char
                for (const cha of char) {
                    cha.getChar()
                        .then(()=>{
                            console.log('got chadata')
                        })
                }
        })
    })
    .catch((error) => {
        console.error('Error Registering:', error);
    });


// Test the registration method
