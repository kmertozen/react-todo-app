import React from 'react'
import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';


function Login() {
    const inputRef = useRef()
    const sifreRef = useRef()

    const users = [{
        username: "mert",
        password: "mert1234"
    },
    {
        username: "deneme",
        password: "deneme1234"
    }
    ];
    const navigate=useNavigate();
    const [isActive, setActive] = useState(true);
    const loginHandler = (e) => {
        e.preventDefault();
        const data = users.find((user) => user.username === inputRef.current.value);
        if (data) {
            if (data.password !== sifreRef.current.value) {
                setActive(false);
            } else {
                navigate("/");
            }
        } else {
            setActive(false);
        }
    };


    return (
        <div className='w-50 m-auto bg-white'>
            <form className="form-signin w-50 m-auto p-4" onSubmit={loginHandler}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label className="sr-only">Email address</label>
                <input type="text" className="form-control mt-4" ref={inputRef} placeholder="Kullanıcı Adı" />
                <label className="sr-only">Password</label>
                <input type="password" className="form-control mt-4" ref={sifreRef} placeholder="Password" />
                <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign in</button>
                <div className={`${isActive ? "d-none" : "d-block" } alert alert-danger mt-2`} role="alert">
                   Geçersiz Giriş Bilgileri
                </div>
            </form></div>
    )
}

export default Login