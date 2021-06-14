import React from 'react';
import { useHistory } from 'react-router-dom';
import './MentorList.css';

const MentorList = ({ mentors }) => {
	const history = useHistory();

	return (
		<div className='mentor-list'>
			{mentors.map((mentor) => (
				<div className='mentor-card' key={mentor.id}>
					<div className='mentor-image'>
						<img src={mentor.image} alt='mentor' />
					</div>
					<div className='mentor-content'>
						<h3>{mentor.username}</h3>
						<p>{mentor.bio}</p>
						<button
							className='view-slots'
							onClick={() =>
								history.push(`/profile/${mentor.id}`)
							}
						>
							View Available Slots
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default MentorList;
