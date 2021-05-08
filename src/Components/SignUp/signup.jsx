import React, {useState} from 'react';
import { Button, TextField} from '@material-ui/core';
import './signup.css';
import Popup from '../Popup';
import Login from '../Login/login';

const SignUp = () => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div className='SignUp'>
            <div className='head'>
                <span>Find Me A Mentor</span>
            </div>
            <div className='top1'>
                <span><h1>New Here?</h1></span>
            </div>
            <div className='top2'>
                <span>Create an account to get started.</span>
            </div>
            <div className='UserName'><span>Username</span>
                <div><TextField style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' Test' /></div>
            </div>
            <div className='Email'>
                <span>Email</span>
                <div><TextField style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' test@email.com' /></div>
            </div>
            <div className='Password'><span>Password</span>
                <div><TextField type='password' style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' ********' /></div>
            </div>
            <div className='ConfirmPassword'>
                <span>ConfirmPassword</span>
                <div><TextField type='password' style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' ********' /></div>
            </div>
            <div className='Button'><Button type='submit' style={{ backgroundColor: '#339DFF', width: 150}}><span>Create Account</span></Button></div>
            <div className='lower'>
                <span>Already Have An Account? </span>
                <div className='create' onClick={() => setOpenPopup(true)}> Login </div>
            </div>      
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}> <Login/></Popup>     
        </div>
    )
}
export default SignUp