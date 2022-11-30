import React, { useContext } from 'react'
import Context from './Context'

export default function Home() {
    const { user } = useContext(Context)
    return (
        <div className='p-5'>
            {user.name === 'unknow' ? (
                <h1 className='text-center'>User Is Not Log In</h1>
            ) : (
                <>
                    <h4 className='text-center'>User Name : {user.name}</h4>
                    <h4 className='text-center'>User Email : {user.email}</h4>
                </>
            )

            }
        </div>
    )
}
