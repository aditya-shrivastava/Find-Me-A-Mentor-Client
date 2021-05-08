import React,{useState} from 'react'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './UserAvatar.css'

const UserAvatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='user_avatar'>
            <Badge overlap='circle' anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} badgeContent={<button aria-controls='dropdown' onClick={handleClick}><ExpandMoreIcon style={{
                    width: 20,
                    height: 20,
                    color: '#1DB954',
                    background: 'white',
                    borderRadius: 50,
                }} /></button>}>
                <Menu id='dropdown' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                    <MenuItem><AccountCircleIcon style={{color:'#1DB954'}} />Profile</MenuItem>
                    <MenuItem><SettingsIcon style={{color:'#1DB954'}}/> Settings </MenuItem>
                    <MenuItem><ExitToAppIcon style={{color:'#1DB954'}}/>Logout</MenuItem>
                </Menu>
                    <Avatar style={{borderColor: 'white', borderWidth:2}}/>
                </Badge>
        </div>
    )
}

export default UserAvatar
