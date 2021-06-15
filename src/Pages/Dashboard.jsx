import React, { useEffect, useState } from 'react';

import api from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { initializeSlots } from '../features/slotSlice';

import DashboardHeader from '../Components/DashBoard/DashboardHeader/DashboardHeader';
import Notification from '../Components/DashBoard/Notification/Notification';
import Review from '../Components/DashBoard/Review/Review';
import Sessions from '../Components/DashBoard/Sessions/Sessions';

function Dashboard() {
	const dispatch = useDispatch();
	const { user } = useSelector(selectUser);
	const [isMentee, setIsMentee] = useState();

	useEffect(() => {
		setIsMentee(user?.type === 'mentee');
	}, [user?.type]);

	useEffect(() => {
		if (user) {
			const fetchSlots = async () => {
				try {
					const response = await api.get(
						`/slot/${user?.type}/${user?.uid}`
					);

					dispatch(initializeSlots(response.data.slots));
				} catch (error) {
					console.error(error);
				}
			};
			fetchSlots();
		}
	}, [user?.uid, dispatch]);

	return (
		<div className='p-4 lg:px-32 flex justify-evenly flex-col'>
			<DashboardHeader
				user={user}
				isMentee={isMentee}
				setIsMentee={setIsMentee}
			/>
			<div className='mt-10 h-screen flex w-full'>
				{isMentee ? (
					<Sessions />
				) : (
					<div className='flex w-full justify-between'>
						<Notification />
						<Review />
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
