import React from 'react';
import './Banner.css';

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner-img'>
				<img
					src='https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80'
					alt='banner'
				/>

				<div className='avatar'>
					<img
						src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
						alt='user'
					/>
				</div>
			</div>

			<div className='user-info'>
				<h3>Aditya Shrivastava</h3>
				<h2>Mentor : Category</h2>
				<p>
					bio: Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Architecto distinctio alias consequuntur pariatur
					minima omnis deserunt voluptatum velit assumenda quia.
				</p>
			</div>
		</div>
	);
};

export default Banner;
