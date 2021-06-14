import React, { useRef, useState } from 'react';
import './UserAvatar.css';

import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
	};

	return (
		<div className='user-avatar'>
			<Badge
				overlap='circle'
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				badgeContent={
					<button
						className='avatar-btn'
						aria-controls='dropdown'
						onClick={handleClick}
						ref={(el) => (anchor.current = el)}
					>
						<ExpandMoreIcon />
					</button>
				}
			>
				<Menu
					id='dropdown'
					className='Menu'
					anchorEl={anchor.current}
					keepMounted
					open={open}
					onClose={handleClose}
				>
					<MenuItem
						className='MenuItem'
						onClick={() => history.push('/dashboard')}
					>
						<AccountCircleIcon />
						Dashboard
					</MenuItem>
					<MenuItem className='MenuItem' onClick={handleLogout}>
						<ExitToAppIcon />
						Logout
					</MenuItem>
				</Menu>
				<Avatar
					src={user?.image}
					style={{ borderColor: 'white', borderWidth: 2 }}
				/>
			</Badge>
		</div>
	);
};

export default UserAvatar;
