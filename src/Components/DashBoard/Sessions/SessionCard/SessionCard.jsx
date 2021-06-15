import React, { useState } from 'react';

import './SessionCard.css';

import { IconButton, Snackbar, Avatar } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const SessionCard = ({ slot }) => {
	const [showSnackbar, setShowSnackbar] = useState(false);
	const isLive = new Date() > new Date(slot.date);

	const handleJoinMeeting = () => {
		if (isLive) {
			console.log('Live');
		} else {
			setShowSnackbar(true);
		}
	};

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	return (
		<div className='session-card'>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
			>
				<div className='snackbar error'>
					<h2>This meeting is not active right now.</h2>
					<IconButton onClick={handleCloseSnackbar}>
						<Close />
					</IconButton>
				</div>
			</Snackbar>
			<div className='card-col-left'>
				<div className='card-header'>
					<h2>{new Date(slot.date).toLocaleString()}</h2>
				</div>
				<button
					className={`join-btn ${isLive && 'live'}`}
					onClick={handleJoinMeeting}
				>
					Join Now
				</button>
			</div>
			<div className='card-col-right'>
				<Avatar
					src={slot.creator_details.image}
					style={{ width: 80, height: 80 }}
				/>
				<h2>{slot.creator_details.name}</h2>
			</div>
		</div>
	);
};
export default SessionCard;
