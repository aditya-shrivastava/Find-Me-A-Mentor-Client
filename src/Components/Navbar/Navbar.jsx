import React from 'react';
import Button from "@material-ui/core/Button";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='left'>
                <a href="/"> Find Me A Mentor </a>
            </div>
            <div className='center'>
                <input type="text" placeholder='Search' />
            </div>

            <div className='right'>
                <a href="/"> <span>Home</span> </a>
                <a href="./A    bout"> <span>About</span> </a>
                <a href="/"> <span>Our Team</span> </a>
                <Button onClick="/"> <span>Login</span> </Button>

            </div>
        </div>
    )
}
export default Navbar
