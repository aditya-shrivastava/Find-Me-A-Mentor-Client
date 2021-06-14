import React from 'react';
import './Banner.css';

const Banner = ({ userData }) => {
	return (
		<div className='banner'>
			<div className='banner-img'>
				<img
					src='https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
					alt='banner'
				/>

				<div className='avatar'>
					<img src={userData?.image} alt='user' />
				</div>
			</div>

			<div className='user-info'>
				<h3>{userData?.username}</h3>
				<h2>Mentor : {userData?.category}</h2>
				<p>bio: {userData?.bio}</p>
			</div>
		</div>
	);
};

export default Banner;
