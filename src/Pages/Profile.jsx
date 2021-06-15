import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api';

import Banner from '../Components/Banner/Banner';
import Slots from '../Components/Slots/Slots';

const Profile = () => {
	const { id } = useParams();
	const [userData, setUserData] = useState({});
	const [slotsData, setSlotsData] = useState([]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userResponse = await api.get(`/user/${id}`);
				const slotsResponse = await api.get(`/slot/mentor/${id}`);

				setUserData(userResponse.data.user);
				setSlotsData(slotsResponse.data.slots);
			} catch (error) {
				console.error(error);
			}
		};
		fetchUserData();
	}, [id]);

	return (
		<div className='p-4 h-full lg:px-32 bg-gray-150'>
			<Banner userData={userData} />
			<Slots slotsData={slotsData} setSlotsData={setSlotsData} />
		</div>
	);
};

export default Profile;
