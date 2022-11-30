import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from './Context';

export default function LogIn() {
    const { setuser } = useContext(Context)
    const navigate = useNavigate();
    const [LogInInput, setLogInInput] = useState({
        email: '',
        password: ''
    })

    const [ResponsStatus, setResponsStatus] = useState('')

    const handleChange = (e) => {
        setLogInInput({
            ...LogInInput,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(LogInInput)

        let headersList = {
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(LogInInput);

        let url = 'http://127.0.0.1:3001/Login'
        let response = await fetch(url, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);

        if (response.status === 200) {
            navigate("/")
            let data = await response.json();
            setuser(data)
        } else {
            setResponsStatus(response.status)
        }

    }

    return (
        <div className='pt-5 d-flex flex-column mw-50 min-vw-25'>
            <div className="m-3 container-md">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3 row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input name='email' type="email" onChange={handleChange} value={LogInInput.email} className="form-control" id="inputEmail" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input name='password' type="password" onChange={handleChange} value={LogInInput.password} className="form-control" id="inputPassword" />
                        </div>
                    </div>

                    {ResponsStatus === 404 ? <div className="alert alert-danger" role="alert">Place Enter valid Email</div> : ''}
                    {ResponsStatus === 401 ? <div className="alert alert-danger" role="alert">Place Enter valid Password</div> : ''}

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <input type="submit" value="LogIn" className="btn btn-primary me-md-2" />
                    </div>
                </form>
                <h6 className='text-center'>Or</h6>
                <div className="m-3 container-md d-grid gap-2">
                    <button className="btn btn-outline-secondary" type="button">LogIn with Google</button>
                    <button className="btn btn-outline-primary" type="button">LogIn with Facbook</button>
                </div>
            </div>
        </div>
    )
}
