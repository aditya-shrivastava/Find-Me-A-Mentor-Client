import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Slots from '../Components/Slots/Slots';

const Profile = () => {
	const { id } = useParams();

	return (
		<div className='p-4 lg:px-32 bg-gray-150'>
			<Banner />
			<Slots />
		</div>
	);
};

export default Profile;
