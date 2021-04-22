import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <a href="/"> Find Me A Mentor </a>
            </div>
            <div className='center'>
                <TextField style={{ backgroundColor: '#C4C4C4', borderRadius: 5, width: 600}} InputProps={{ disableUnderline: true }} placeholder='Search'  />
            </div>
            
            <div className='right'>
                <a href="/"> <span>Home</span> </a>
                <a href="/about"> <span>About</span> </a>
                <a href="/team"> <span>Our Team</span> </a>
                <Button style={{backgroundColor: 'white', color: '#1DB954'}} onClick="/"> <span>Login</span> </Button>
            </div>
        </div>
    )
}
export default Navbar
