import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LoginValidation';
import validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("emailid",JSON.stringify(email))
        const values={
            email:email,
            password:password
        }

        setErrors(validation(values));

        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:3002/login', {email:email,password:password})
                .then((res) => {
                    if (res.data === "Success") {
                        alert('Succesfull login');
                        navigate('/ProfileDisplay');
                    } else {
                        alert("No record exist.")
                    }
                })
                .catch(err => console.log(err));
                // setEmail(values.email);
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: 'linear-gradient(#19105b, #472067, #7c3375, #FF6196)' }}>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name='email' value={email}
                            onChange={(e)=>{setEmail(e.target.value)}} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name='password' value={password}
                            onChange={(e)=>{setPassword(e.target.value)}} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0' style={{ background: 'skyblue', border: 0 }}><strong>Log in</strong></button>
                    <p>Didn't have an account?<Link to="/signup" className='btn btn-default border w-100 rounded-0' style={{ background: 'skyblue', color: 'white' }} >Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;