import React , {useEffect, useState} from 'react';
import Search from './Search/Search';
import Popup from '../Popup';
import UserAvatar from './UserAvatar/UserAvatar';

import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

import './Navbar.css';


import { NavLink } from 'react-router-dom';

import Button from "@material-ui/core/Button";


const Navbar = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const user = useSelector(selectUser);

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
                <NavLink className='link' to="/team">
                    Our Team
                </NavLink>
                {user ? <UserAvatar user={user} /> : <Button onClick={() => setOpenPopup(true)}>
                    Login
                </Button>}
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
            </div>
        </div>
    )
}
export default Navbar