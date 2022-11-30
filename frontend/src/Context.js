import React, { createContext, useState } from 'react'

const Context = createContext()
export default Context;

export const Provider = ({ children }) => {
    const [user, setuser] = useState({
        name: 'unknow',
        email: 'unknow'
    })

    const value = {
        user,
        setuser
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}