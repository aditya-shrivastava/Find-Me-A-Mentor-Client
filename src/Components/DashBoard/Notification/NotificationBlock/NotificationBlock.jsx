import React from 'react';
import './NotificationBlock.css';

import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function NotificationBlock({ slot, removeSlot }) {
	return (
		<div className={`notif__block ${slot.isBooked && 'booked'}`}>
			<p>{new Date(slot.date).toLocaleString()}</p>
			<button className='join-btn'>Join Now</button>
			<IconButton
				className='delete-btn'
				onClick={() => removeSlot(slot._id)}
			>
				<Delete />
			</IconButton>
		</div>
	);
}

export default NotificationBlock;
