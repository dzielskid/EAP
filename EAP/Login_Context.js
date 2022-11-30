import { createContext, useState } from 'react'

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [isSignedIn, setSignedIn] = useState(false);
    const [username, setUsername] = useState("Guest");
    const [userLevel, setUserLevel] = useState("Guest");

    return (
        <LoginContext.Provider value={{isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel}}>
            { children }
        </LoginContext.Provider>
    )
}