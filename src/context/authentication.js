import React, {createContext, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [setUserName] = useState("")

    console.log(isAuthenticated);

    function signIn(email, password) {
        if(email === "luiza.marins@gmail.com" && password === "12345"){
            localStorage.setItem('@authenticated', true)
            localStorage.setItem('@user', "Luiza")
            setIsAuthenticated(true)
            setUserName("Luiza")
            return
        }
    }

    return(
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;