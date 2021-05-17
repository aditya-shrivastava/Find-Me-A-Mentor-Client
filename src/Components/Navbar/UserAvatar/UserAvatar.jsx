import React,{useRef, useState} from 'react';
import './UserAvatar.css';

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/userSlice';

const UserAvatar = ({ user }) => {
    const [open, setOpen] = useState(false);
    const anchor = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        dispatch(logout());
    }

    return (
        <div className='user-avatar'>
            <Badge 
                overlap='circle' 
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} 
                badgeContent={
                    <button aria-controls='dropdown' onClick={handleClick} ref={el => anchor.current = el}>
                        <ExpandMoreIcon style={{
                            width: 20,
                            height: 20,
                            color: '#1DB954',
                            background: 'white',
                            borderRadius: 50,
                        }}/>
                    </button>
                }>
                <Menu id='dropdown' anchorEl={anchor.current} keepMounted open={open} onClose={handleClose}>
                    <MenuItem onClick={() => history.push('/profile')}><AccountCircleIcon style={{color:'#1DB954'}} />Profile</MenuItem>
                    <MenuItem><SettingsIcon style={{color:'#1DB954'}}/> Settings </MenuItem>
                    <MenuItem onClick={handleLogout}><ExitToAppIcon style={{color:'#1DB954'}}/>Logout</MenuItem>
                </Menu>
                    <Avatar src={user.image && `http://localhost:5000/${user.image}`} style={{borderColor: 'white', borderWidth:2}}/>
                </Badge>
        </div>
    )
}

export default UserAvatar
