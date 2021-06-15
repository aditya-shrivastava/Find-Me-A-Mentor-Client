import React, { useState } from 'react';
import './Slots.css';

import api from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { bookSlot } from '../../features/slotSlice';
import { selectUser, update } from '../../features/userSlice';

import { Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Slot = ({ slot, slotBooking }) => {
	const [disabled, setDisabled] = useState(slot.isBooked);
	const handleSlotBooking = (id) => {
		if (!slot.isBooked) {
			setDisabled(true);
			slotBooking(id);
		}
	};

	return (
		<div className='slot'>
			<h3>{new Date(slot.date).toLocaleString()}</h3>
			<h3>Duration: 1hr</h3>
			<button
				className={`slot-btn ${disabled ? 'disabled' : 'enabled'}`}
				disabled={disabled}
				onClick={() => handleSlotBooking(slot._id)}
			>
				{disabled ? 'Booked' : 'Book Slot'}
			</button>
		</div>
	);
};

const Slots = ({ slotsData, setSlotsData }) => {
	const dispatch = useDispatch();
	const { user, token } = useSelector(selectUser);
	const [showSnackbar, setShowSnackbar] = useState(false);

	const slotBooking = async (id) => {
		try {
			const response = await api.get(`/slot/book/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			const { slot } = response.data;
			const schedule = [...user.schedule, slot._id];

			dispatch(bookSlot(slot));
			dispatch(update({ ...user, schedule }));
			setShowSnackbar(true);
		} catch (error) {
			console.error(error);
		}
	};

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	return (
		<div className='slots'>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
			>
				<div className='snackbar success'>
					<h2>Slot has been booked.</h2>
					<IconButton onClick={handleCloseSnackbar}>
						<Close />
					</IconButton>
				</div>
			</Snackbar>
			{slotsData.map((slot) => (
				<Slot key={slot._id} slot={slot} slotBooking={slotBooking} />
			))}
		</div>
	);
};

export default Slots;
