import React, { useState } from 'react';
import './DashboardHeader.css';

import UpdateProfile from '../UpdateProfile/UpdateProfile';

import { IconButton, Avatar, Badge } from '@material-ui/core';
import { Chat, TurnedIn, Edit } from '@material-ui/icons';

const DashboardHeader = ({ user, isMentee, setIsMentee }) => {
	const [open, setOpen] = useState(false);

	const handleTypeUpgrade = () => {};

	return (
		<div className='DashboardHeader'>
			<div className='leftcard'>
				<Avatar src={user?.image} style={{ width: 100, height: 100 }} />
				<div className='user-details'>
					<h2>{user?.username || 'Jessica James'}</h2>
					{!isMentee && (
						<div className='icon'>
							<TurnedIn />
							{user?.category || 'Digital Creator'}
						</div>
					)}
					<p>
						{user?.bio ||
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
					</p>
					{isMentee ? (
						<button
							className='mentor-btn'
							onClick={handleTypeUpgrade}
						>
							Become Mentor
						</button>
					) : null}
				</div>
			</div>
			<div className='rightcard'>
				<div className='icon-buttons'>
					<div className='icon-button'>
						<IconButton>
							<Badge
								color='secondary'
								overlap='circle'
								badgeContent={0}
								showZero
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							>
								<Chat />
							</Badge>
						</IconButton>
						<span>No new messages!</span>
					</div>
					<div className='icon-button'>
						<IconButton onClick={() => setOpen(true)}>
							<Edit />
						</IconButton>
						<span>Edit user details</span>
					</div>

					{open && (
						<UpdateProfile
							user={user}
							open={open}
							setOpen={setOpen}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
