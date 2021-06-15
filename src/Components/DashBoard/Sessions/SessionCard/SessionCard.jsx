import React from 'react';
import { Avatar } from '@material-ui/core';

import './SessionCard.css';

const SessionCard = ({ slot }) => {
	return (
		<div className='session-card'>
			<div className='card-col-left'>
				<div className='card-header'>
					<h2>{new Date(slot.date).toLocaleString()}</h2>
				</div>
				<button className='join-btn' disabled>
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
