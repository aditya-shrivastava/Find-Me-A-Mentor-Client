import React, {useState} from 'react';
import { Button, TextField} from '@material-ui/core';
import './login.css';
import SignUp from '../SignUp/signup';
import Popup from '../Popup';


const Login = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    return (

            <div className='login'>
                <div className='head'>
                    <span>Find Me A Mentor</span>
                </div>
                <div className='top1'>
                    <span><h1>Welcome Back!</h1></span>
                </div>
                <div className='top2'>
                    <span>We are happy to see you.</span>
                </div>
                <div className='Email'><span>Email</span>
                    <div><TextField style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' test@email.com' /></div>
                </div>
                <div className='Password'>
                    <span>Password</span>
                    <div><TextField type='password' style={{ backgroundColor: '#EAE8E8', width: 300, borderRadius: 5 }} InputProps={{ disableUnderline: true }} placeholder=' ********' /></div>
                </div>
                <div className='Button'><Button type='submit' style={{ backgroundColor: '#339DFF', width: 150}}><span>Login</span></Button></div>
                <div className='lower'>
                    <span>Don't have an account? </span>
                    <div className='create' onClick={() => setOpenPopup(true)}>Create Account</div>
                </div>
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}> <SignUp/></Popup>
            </div>
        
    )
}
export default Login