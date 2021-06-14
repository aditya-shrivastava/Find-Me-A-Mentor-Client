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
				const slotsResponse = await api.get(`/slot/user/${id}`);

				const slots = slotsResponse.data.slots.filter(
					(slot) => slot.isBooked !== true
				);

				setUserData(userResponse.data.user);
				setSlotsData(slots);
			} catch (error) {
				console.error(error);
			}
		};
		fetchUserData();
	}, [id]);

	return (
		<div className='p-4 h-full lg:px-32 bg-gray-150'>
			<Banner userData={userData} />
			<Slots slotsData={slotsData} />
		</div>
	);
};

export default Profile;
