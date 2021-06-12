import React from 'react';
import { Avatar } from '@material-ui/core';

import './SessionCard.css';

const SessionCard = () => {
	return (
		<div className='session-card'>
			<div className='card-col-left'>
				<div className='card-header'>
					<h2>Date</h2>
					<h2>Time</h2>
				</div>
				<button className='join-btn' disabled>
					Join Now
				</button>
			</div>
			<div className='card-col-right'>
				<Avatar style={{ width: 80, height: 80 }} />
				<h2>Mentor Name</h2>
			</div>
		</div>
	);
};
export default SessionCard;
