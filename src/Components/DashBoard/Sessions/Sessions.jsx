import React from 'react';
import './Sessions.css';

import { useSelector } from 'react-redux';
import { selectSlots } from '../../../features/slotSlice';

import SessionCard from './SessionCard/SessionCard';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Sessions = () => {
	const { slots } = useSelector(selectSlots);
	return (
		<div className='sessions'>
			<div className='upcoming-sessions'>
				<h1>Upcoming Sessions</h1>
				<button>
					<ExpandLessIcon />
				</button>
			</div>
			<div className='session-cards'>
				{slots?.map((slot) => (
					<SessionCard key={slot._id} slot={slot} />
				))}
			</div>
		</div>
	);
};

export default Sessions;
