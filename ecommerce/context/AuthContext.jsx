import {createContext, useState, useEffect} from 'react'
import {auth} from '../libs/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const authContext = createContext();

export default function AuthContext({children}) {
    const [user, setUser] = useState({
        logout: true
    })
    useEffect(()=>{
        onAuthStateChanged(auth,(result)=>{
            //* Para que la aplicación no pare si result es null
            result !== null && setUser({
                name: result.displayName,
                email: result.email,
                logout: false
            })
        })
    },[])
    return (
        <authContext.Provider
            value={{
                user, 
                setUser
            }}
        >
            {children}
        </authContext.Provider>
    )
}
