import React from 'react';
import './Slots.css';

const Slot = () => {
	return (
		<div className='slot'>
			<h3>Date</h3>
			<h3>Time</h3>
			<h3>Duration: 1hr</h3>
			<button className='slot-btn'>Book Slot</button>
		</div>
	);
};

const Slots = () => {
	return (
		<div className='slots'>
			{Array(5)
				.fill()
				.map((_, index) => (
					<Slot key={index} />
				))}
		</div>
	);
};

export default Slots;
