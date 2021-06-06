import React from 'react';
import './MentorList.css';

const MentorList = ({ mentors }) => {
	console.log(mentors);
	return (
		<div className='mentor-list'>
			{mentors.map((mentor) => (
				<>
					<div className='mentor-card'>
						<div className='mentor-image'>
							<img
								src={
									mentor.image &&
									`http://localhost:5000/${mentor.image}`
								}
								alt='mentor'
							/>
						</div>
						<div className='mentor-content'>
							<h3>{mentor.username}</h3>
							<p>
								{mentor.bio}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum, blanditiis?
							</p>
							<button className='view-slots'>
								View Available Slots
							</button>
						</div>
					</div>
					<div className='mentor-card'>
						<div className='mentor-image'>
							<img
								src={
									mentor.image &&
									`http://localhost:5000/${mentor.image}`
								}
								alt='mentor'
							/>
						</div>
						<div className='mentor-content'>
							<h3>{mentor.username}</h3>
							<p>
								{mentor.bio}
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laborum, blanditiis?
							</p>
							<button className='view-slots'>
								View Available Slots
							</button>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default MentorList;
