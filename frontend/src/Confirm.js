import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Context from './Context';

export default function Confirm() {
    const { user, setuser } = useContext(Context)
    const navigate = useNavigate();

    const [LogInInput, setLogInInput] = useState({
        email: user.email,
        code: ''
    })
    const [ResponseStatus, setResponseStatus] = useState('')

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

        let url = "http://127.0.0.1:3001/confirm"
        let response = await fetch(url, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        setResponseStatus(response.status)

        if (response.status === 200) {
            setuser({ ...user, email_status: 'verify' })
            setTimeout(() => {
                navigate("/")
            }, 1000);
        }
        let data = await response.text();
        console.log(data);
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
                            {ResponseStatus === 200 ? <div className="alert mt-3 alert-success" role="alert">Your Email is verify</div> : ''}
                            {ResponseStatus === 406 ? <div className="alert mt-3 alert-danger" role="alert">You Enter Worng Pin</div> : ''}
                            {ResponseStatus === 404 ? <div className="alert mt-3 alert-danger" role="alert">Your Email is Not Find</div> : ''}
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
