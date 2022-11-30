import React, { createContext } from 'react'

const Context = createContext()
export default Context;

export const Provider = ({ children }) => {

    const user = {
        name: 'unknow',
        email: 'unknow'
    }

    const value = {
        user
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}