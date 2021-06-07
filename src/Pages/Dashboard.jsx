import React from 'react';

import DashboardHeader from '../Components/DashBoard/DashboardHeader/DashboardHeader';
import Notification from '../Components/DashBoard/Notification/Notification';
import Review from '../Components/DashBoard/Review/Review';
import Video from '../Components/Video/Video';

function Dashboard() {
	return (
		<div className='p-4 lg:px-32 flex justify-evenly flex-col'>
			<DashboardHeader />
			<Video />
			<div className='flex h-screen justify-between'>
				<Notification />
				<Review />
			</div>
		</div>
	);
}

export default Dashboard;
