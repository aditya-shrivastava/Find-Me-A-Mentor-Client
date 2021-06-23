import React, { useEffect, useState } from 'react';
import Chat from '../Components/Chat/Chat';
import Video from '../Components/Video/Video';

import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../features/userSlice';

import io from 'socket.io-client';

import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const socket = io('http://localhost:5001');

const Meeting = () => {
	const { id } = useParams();
	// const { user } = useSelector(selectUser);

	const [user, setUser] = useState('');
	const [showSnackbar, setShowSnackbar] = useState(false);	

	useEffect(() => {
		socket.emit('join-room', {
			roomId: id,
			username: 'Aditya'
		});

		socket.on('user-connected', username => {
			setUser(username);
			setShowSnackbar(true);
		})
	}, []);

	const handleCloseSnackbar = () => {
		setShowSnackbar(false);
	};

	return (
		<div className='flex w-full h-4/5 justify-evenly items-center'>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
			>
				<div className='snackbar success'>
					<h2>{user} has joined the meeting.</h2>
					<IconButton onClick={handleCloseSnackbar}>
						<Close />
					</IconButton>
				</div>
			</Snackbar>
			<Video />
			<Chat socket={socket} />
		</div>
	);
};

export default Meeting;
