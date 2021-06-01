import React, { useState } from 'react';
import './Navbar.css';

import Popup from '../Popup';
import UserAvatar from './UserAvatar/UserAvatar';
import Search from './Search/Search';

import { NavLink } from 'react-router-dom';

import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const Navbar = () => {
	const [openPopup, setOpenPopup] = useState(false);
	const { user } = useSelector(selectUser);

	return (
		<>
			<div className='navbar'>
				<div className='left'>
					<NavLink className='link' to='/'>
						Find Me A Mentor
					</NavLink>
				</div>

				<Search />

				<div className='right'>
					<NavLink className='link' to='/'>
						Home
					</NavLink>
					<NavLink className='link' to='/team'>
						Our Team
					</NavLink>
					{user ? (
						<UserAvatar user={user} />
					) : (
						<Button
							className='login-btn'
							onClick={() => setOpenPopup(true)}
						>
							Login
						</Button>
					)}
					<Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
				</div>
			</div>
		</>
	);
};
export default Navbar;
