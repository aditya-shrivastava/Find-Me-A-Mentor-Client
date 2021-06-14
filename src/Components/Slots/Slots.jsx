import React from 'react';
import './Slots.css';

const Slot = ({ slot }) => {
	return (
		<div className='slot'>
			<h3>{new Date(slot.date).toLocaleString()}</h3>
			<h3>Duration: 1hr</h3>
			<button className='slot-btn'>Book Slot</button>
		</div>
	);
};

const Slots = ({ slotsData }) => {
	return (
		<div className='slots'>
			{slotsData.map((slot) => (
				<Slot key={slot._id} slot={slot} />
			))}
		</div>
	);
};

export default Slots;
