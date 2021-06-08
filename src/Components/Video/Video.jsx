import React from 'react';
import './Video.css';

import intro from '../../Assets/intro.mp4';

const Video = () => {
	return (
		<div className='video-container'>
			<video src={intro} autoPlay loop muted controls />
		</div>
	);
};

export default Video;
