import React, {createContext, SetStateAction, useState, Dispatch} from "react";
import User from '../scripts/User';

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProvideProps = {
    children : React.ReactNode
}

export default function UserProvider({children} : UserProvideProps){
    const [user, setUser] = useState<User>(new User('example','example'));

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}