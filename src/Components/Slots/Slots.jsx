import React from 'react';
import './Slots.css';

import api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { bookSlot } from '../../features/slotSlice';
import { selectUser, update } from '../../features/userSlice';

const Slot = ({ slot, handleSlotBooking }) => {
	return (
		<div className='slot'>
			<h3>{new Date(slot.date).toLocaleString()}</h3>
			<h3>Duration: 1hr</h3>
			<button
				className='slot-btn'
				onClick={() => handleSlotBooking(slot._id)}
			>
				Book Slot
			</button>
		</div>
	);
};

const Slots = ({ slotsData, setSlotsData }) => {
	const dispatch = useDispatch();
	const { user, token } = useSelector(selectUser);

	const handleSlotBooking = async (id) => {
		try {
			const response = await api.get(`/slot/book/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			const { slot } = response.data;
			const schedule = [...user.schedule, slot._id];
			const slots = slotsData.filter((slotData) => slotData._id === id);

			setSlotsData(slots);
			dispatch(bookSlot(slot));
			dispatch(update({ ...user, schedule }));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='slots'>
			{slotsData.map((slot) => (
				<Slot
					key={slot._id}
					slot={slot}
					handleSlotBooking={handleSlotBooking}
				/>
			))}
		</div>
	);
};

export default Slots;
