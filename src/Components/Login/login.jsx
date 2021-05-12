import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './login.css';


const Login = ({setIsLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
    }

    return (

            <div className='login'>
                <div className='head'>
                    <h3>Find Me A Mentor</h3>
                    <h1>Welcome Back!</h1>
                    We are happy to see you.
                </div>
                <form onSubmit={handleLogin} className="login-form">
                    <div className='input-field'>
                    Email
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='input-field'>
                    Password
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <Button variant='contained' type='submit'>Login</Button>
                </form>
                <div className='lower'>
                    <span>Don't have an account? </span>
                    <div className='create' onClick={() => setIsLogin(false)}>Create Account</div>
                </div>
            </div>
        
    )
}
export default Login