import React, { useState } from 'react';
import './NotificationBlock.css';

import { useHistory } from 'react-router-dom';

import { IconButton, Snackbar } from '@material-ui/core';
import { Close, Delete, Info } from '@material-ui/icons';

function NotificationBlock({ slot, removeSlot }) {
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [showSnackbar, setShowSnackbar] = useState(false);
	const isLive = new Date() > new Date(slot.date);

	const handleJoinMeeting = () => {
		if (isLive) {
			history.push(`/meeting/${slot._id}`);
		} else {
			setShowSnackbar(true);
		}
	};

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	return (
		<div className='notif__block'>
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
			<div className='flex w-full items-center h-16 justify-between'>
				<p className='date'>{new Date(slot.date).toLocaleString()}</p>
				<button
					className={`join-btn ${isLive && 'live'}`}
					onClick={handleJoinMeeting}
				>
					Join Now
				</button>
				<IconButton
					className='delete-btn'
					onClick={() => removeSlot(slot._id)}
				>
					<Delete />
				</IconButton>
				{slot.isBooked ? (
					<div className='booked'>
						Booked
						<IconButton onClick={() => setOpen(!open)}>
							{!open ? <Info /> : <Close />}
						</IconButton>
					</div>
				) : (
					<p className='available'>Available</p>
				)}
			</div>

			{open && (
				<div className='booker-details'>
					Booked by:
					<h3>{slot.booker_details.name}</h3>
					<img src={slot.booker_details.image} alt='booker' />
				</div>
			)}
		</div>
	);
}

export default NotificationBlock;
