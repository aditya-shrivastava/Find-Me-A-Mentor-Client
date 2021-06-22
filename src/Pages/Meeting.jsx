import React from 'react';
import Chat from '../Components/Chat/Chat';
import Video from '../Components/Video/Video';

const Meeting = () => {
	return (
		<div className='flex w-full h-screen justify-evenly items-center'>
			<Video />
			<Chat />
		</div>
	);
};

export default Meeting;
