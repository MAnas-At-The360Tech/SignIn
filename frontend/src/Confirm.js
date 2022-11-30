import React, { useState } from 'react'

export default function Confirm() {
    const [LogInInput, setLogInInput] = useState({
        code: ''
    })

    const handleChange = (e) => {
        setLogInInput({
            ...LogInInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(LogInInput)
    }

    return (
        <div className='pt-5 d-flex flex-column mw-50 min-vw-25'>
            <div className="m-3 container-md">
                <h2 className='text-center'>Confirm Your Email</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label htmlFor="code" className="col-sm-2 col-form-label">Code</label>
                        <div className="col-sm-10">
                            <input min='1000' max='9999' name='code' type="number" onChange={handleChange} value={LogInInput.code} className="form-control" id="code" />
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <input type="submit" value="Ok" className="btn btn-primary me-md-2" />
                    </div>
                </form>
            </div>
        </div>
    )
}
