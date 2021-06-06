import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api';

import MentorList from '../Components/MentorList/MentorList';

const Mentors = () => {
	const { cname } = useParams();
	const [mentors, setMentors] = useState([]);

	useEffect(() => {
		const fetchMentors = async () => {
			try {
				const response = await api.get(`/categories/${cname}`);
				const { mentors } = response.data;
				setMentors(mentors);
			} catch (error) {
				console.log(error);
			}
		};

		fetchMentors();
	}, []);

	return (
		<>
			<MentorList mentors={mentors} />
		</>
	);
};

export default Mentors;
