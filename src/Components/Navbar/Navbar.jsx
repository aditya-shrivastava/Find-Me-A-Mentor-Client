import React , {useState} from 'react';
import Search from './Search/Search';
import Popup from '../Popup';
//import UserAvatar from './UserAvatar/UserAvatar';

import './Navbar.css';

import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import Button from "@material-ui/core/Button";


const Navbar = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <div className='navbar'>
            <div className='left'>
                <NavLink className='link' to='/'> Find Me A Mentor </NavLink>
            </div>
            
            <Search />
            
            <div className='right'>
                <NavLink className='link' to='/'>
                    Home
                </NavLink>
                <Link smooth className='link' to='about'>
                    About
                </Link>
                <NavLink className='link' to="/team">
                    Our Team
                </NavLink>
                {/* <UserAvatar /> */}
                <Button onClick={() => setOpenPopup(true)}>
                    Login
                </Button>
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
            </div>
        </div>
    )
}
export default Navbar
