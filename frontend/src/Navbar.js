import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">The 360 Tech</Link>
                <div className="d-flex">
                    <Link to="login" type="button" className="btn btn-primary mx-3">Log In</Link>
                    <Link to="signin" type="button" className="btn btn-secondary">Sing In</Link>
                </div>
            </div>
        </nav>
    )
}
