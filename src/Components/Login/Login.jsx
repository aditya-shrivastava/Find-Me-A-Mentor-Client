import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

import {useAuth} from '../../hooks/auth-hook';

const Login = ({setIsLogin, setOpenPopup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, error, authenticate } = useAuth();

    const dispatch = useDispatch();

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const user = await authenticate(true, {email, password});   
            dispatch(login(user));    
        
            setEmail('');
            setPassword('');
            setOpenPopup(false);
        } catch (error) {
            
        }
    }

    return (
            <React.Fragment>
                {error && <h1 className='text-red-500 text-center text-lg'>{error}</h1>}
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
            </React.Fragment>
        
    )
}
export default Login