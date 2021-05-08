import React , {useState} from 'react';
import Button from "@material-ui/core/Button";
import Search from './Search/Search';
import Login from '../Login/login';
import Popup from '../Popup';
import './Navbar.css';


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
                <a href="/">
                    <span>Home</span>
                </a>
                <a href="/about">
                    <span>About</span>
                </a>
                <a href="/team">
                    <span>Our Team</span>
                </a>
                <Button style={{ color: '#1DB954' }} onClick={() => setOpenPopup(true)}>
                    <span>Login</span>
                </Button>
                <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}> <Login/></Popup>
            </div>
        </div>
    )
}
export default Navbar
