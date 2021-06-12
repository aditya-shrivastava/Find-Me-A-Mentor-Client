import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import DashboardHeader from '../Components/DashBoard/DashboardHeader/DashboardHeader';
import Notification from '../Components/DashBoard/Notification/Notification';
import Review from '../Components/DashBoard/Review/Review';
import Sessions from '../Components/DashBoard/Sessions/Sessions';

function Dashboard() {
	const { user } = useSelector(selectUser);
	const [isMentee, setIsMentee] = useState();

	useEffect(() => {
		setIsMentee(user?.type === 'mentee');
	}, [user]);

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
