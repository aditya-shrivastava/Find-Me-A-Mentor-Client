import React from 'react';
import './Notification.css';
import NotificationBlock from './NotificationBlock/NotificationBlock';

function Notification() {
	const createSlot = (e) => {
		e.preventDefault();
	};

	return (
		<div className='notification'>
			<div className='your__meet'>
				<h1>Organize Your Meet</h1>

				<form className='subject__form' onSubmit={createSlot}>
					<div className='date__time'>
						<input type='date' placeholder='date' name='date' />
						<input type='time' placeholder='time' name='time' />
					</div>
					<button type='submit' className='add'>
						Add
					</button>
				</form>
			</div>

			<div className='your__notification'>
				<h1>Your Appointment</h1>

				<NotificationBlock date='Date' time='Time' />
			</div>
		</div>
	);
}

export default Notification;
