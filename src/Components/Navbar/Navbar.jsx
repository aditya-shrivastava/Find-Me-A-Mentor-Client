import React , {useState} from 'react';
import Button from "@material-ui/core/Button";
import Search from './Search/Search';
import Login from '../Login/login';
import Popup from '../Popup';
import './Navbar.css';

import { Link } from 'react-scroll';
import UserAvatar from './UserAvatar/UserAvatar';


const Navbar = () => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div className='navbar'>
            <div className='left'>
                <a href="/"> Find Me A Mentor </a>
            </div>
            <div className='center'>
                <Search />
            </div>

            <div className='right'>
                <Link smooth className='link' to='/'>
                    <span>Home</span>
                </Link>
                <Link smooth className='link' to='about'>
                    About
                </Link>
                <Link smooth to="/team">
                    <span>Our Team</span>
                </Link>
                {/* <UserAvatar /> */}
                <Button style={{ color: '#1DB954' }} onClick={() => setOpenPopup(true)}>
                    <span>Login</span>
                </Button>
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}> <Login/></Popup>
            </div>
        </div>
    )
}
export default Navbar
