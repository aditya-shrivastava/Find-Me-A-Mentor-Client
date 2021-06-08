import React from 'react';

import DashboardHeader from '../Components/DashBoard/DashboardHeader/DashboardHeader';
import Notification from '../Components/DashBoard/Notification/Notification';
import Review from '../Components/DashBoard/Review/Review';

function Dashboard() {
	return (
		<div className='p-4 lg:px-32 flex justify-evenly flex-col'>
			<DashboardHeader />
			<div className='mt-10 flex justify-between'>
				<Notification />
				<Review />
			</div>
		</div>
	);
}

export default Dashboard;
