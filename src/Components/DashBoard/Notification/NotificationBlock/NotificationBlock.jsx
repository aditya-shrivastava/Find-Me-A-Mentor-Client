import React from 'react';
import './NotificationBlock.css';

function NotificationBlock({ date, time }) {
	return (
		<div className='notif__block'>
			<p>{date}</p>
			<p>{time}</p>
			<button className='join-btn'>Join Now</button>
			<button className='delete-btn'>Delete</button>
		</div>
	);
}

export default NotificationBlock;
