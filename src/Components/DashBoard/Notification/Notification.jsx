import React, { useState } from 'react';
import './Notification.css';

import api from '../../../api';

import { useDispatch, useSelector } from 'react-redux';
import { addSlot, deleteSlot, selectSlots } from '../../../features/slotSlice';
import { selectUser, update } from '../../../features/userSlice';

import NotificationBlock from './NotificationBlock/NotificationBlock';

function Notification() {
	const { user, token } = useSelector(selectUser);
	const { slots } = useSelector(selectSlots);
	const dispatch = useDispatch();
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const today = new Date();

	const createSlot = async (e) => {
		e.preventDefault();
		if (!date || !time) return;

		const newSlot = new Date(`${date} ${time}`);
		try {
			const response = await api.post(
				'/slot/add',
				{ date: newSlot },
				{
					headers: {
						Authorization: token,
					},
				}
			);

			const { slot } = response.data;
			const schedule = [...user.schedule, slot._id];
			dispatch(addSlot(slot));
			dispatch(update({ ...user, schedule }));

			setDate('');
			setTime('');
		} catch (error) {
			console.error(error);
		}
	};

	const removeSlot = async (id) => {
		try {
			await api.delete(`/slot/${id}`, {
				headers: {
					Authorization: token,
				},
			});

			const schedule = user.schedule.filter((slotId) => slotId !== id);

			dispatch(deleteSlot(id));
			dispatch(update({ ...user, schedule }));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='notification'>
			<div className='your__meet'>
				<h1>Organize Your Meetings</h1>

				<form className='subject__form' onSubmit={createSlot}>
					<div className='date__time'>
						<input
							value={date}
							onChange={(e) => setDate(e.target.value)}
							type='date'
							placeholder='date'
						/>
						<input
							type='time'
							value={time}
							onChange={(e) => setTime(e.target.value)}
							placeholder='time'
						/>
					</div>
					<button type='submit' className='add'>
						Add
					</button>
				</form>
			</div>

			<div className='your__notification'>
				<h1>Your Appointment</h1>

				{slots?.map((slot) => (
					<NotificationBlock
						today={today}
						key={slot._id}
						slot={slot}
						removeSlot={removeSlot}
					/>
				))}
			</div>
		</div>
	);
}

export default Notification;
