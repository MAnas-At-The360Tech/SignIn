import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a href='/' className="navbar-brand">The 360 Tech</a>
                <div className="d-flex">
                    <button type="button" className="btn btn-primary mx-3">Log In</button>
                    <button type="button" className="btn btn-secondary">Sing In</button>                </div>
            </div>
        </nav>
    )
}
