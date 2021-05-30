import React from 'react';
import './DashboardHeader.css';

import Avatar from '@material-ui/core/Avatar';
import { Chat, TurnedIn, Edit } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { IconButton } from '@material-ui/core';

const DashboardHeader = () => {
	const { user } = useSelector(selectUser);

	return (
		<div className='DashboardHeader'>
			<div className='leftcard'>
				<Avatar
					src={user?.image && `http://localhost:5000/${user.image}`}
					style={{ width: 100, height: 100 }}
				/>
				<div className='user-details'>
					<h2>{user?.username || 'Jessica James'}</h2>
					<div className='icon'>
						<TurnedIn />
						{user?.category || 'Digital Creator'}
					</div>
					<p>
						{user?.bio ||
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
					</p>
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
						<IconButton>
							<Edit />
						</IconButton>
						<span>Edit user details</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
