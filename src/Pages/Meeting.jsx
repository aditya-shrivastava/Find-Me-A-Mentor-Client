import React, { useEffect, useRef, useState } from 'react';
import Chat from '../Components/Chat/Chat';
import Video from '../Components/Video/Video';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import { useHistory } from 'react-router-dom';

import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Meeting = ({ myPeer, me, socket }) => {
	const { id } = useParams();
	const { user } = useSelector(selectUser);
	const history = useHistory();

	const userVideo = useRef();
	const peerVideo = useRef();
	const connectionRef = useRef();

	const [stream, setStream] = useState(null);

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(gotMedia);
	}, []);

	const gotMedia = (stream) => {
		userVideo.current.srcObject = stream;
		setStream(stream);
		socket.emit('join-room', {
			roomId: id,
			userId: me,
		});
	};

	socket.on('user-connected', (userId) => {
		console.log(`user connected: ${userId}`);

		const call = myPeer.call(userId, stream);

		call.on('stream', (remoteStream) => {
			peerVideo.current.srcObject = remoteStream;
		});
	});

	myPeer.on('call', (call) => {
		call.answer(stream);
		call.on('stream', (remoteStream) => {
			peerVideo.current.srcObject = remoteStream;
		});
	});

	// const handleCloseSnackbar = () => {
	// 	setShowSnackbar(false);
	// };

	return (
		<div className='flex w-full h-4/5 justify-evenly items-center'>
			{/* <Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				open={showSnackbar}
				autoHideDuration={3000}
				onClose={handleCloseSnackbar}
			>
				<div className='snackbar success'>
					<h2>{peerData.username} has joined the meeting.</h2>
					<IconButton onClick={handleCloseSnackbar}>
						<Close />
					</IconButton>
				</div>
			</Snackbar> */}

			<Video
				// callAccepted={callAccepted}
				peerVideo={peerVideo}
				userVideo={userVideo}
				// leaveCall={leaveCall}
			/>
			<Chat user={user} socket={socket} roomId={id} />
		</div>
	);
};

export default Meeting;
