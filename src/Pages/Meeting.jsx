import React, { useEffect, useRef, useState } from 'react';
import Chat from '../Components/Chat/Chat';
import Video from '../Components/Video/Video';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

import { useHistory } from 'react-router-dom';

const Meeting = ({ myPeer, me, socket }) => {
	const { id } = useParams();
	const history = useHistory();
	const { user } = useSelector(selectUser);
	const myId = localStorage.getItem('myPeerId');

	const userVideo = useRef();
	const peerVideo = useRef();
	const callRef = useRef();


	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(gotMedia);

		return () => {
			callRef?.current?.close();
		}
	}, [gotMedia]);

	const gotMedia = (stream) => {
		userVideo.current.srcObject = stream;
		socket.emit('join-room', {
			roomId: id,
			userId: myId,
		});

		socket.on('user-connected', (userId) => {
			callUser(userId, stream);
		});

		myPeer.on('call', (call) => {			
			call.answer(stream);
			callRef.current = call;
			call.on('stream', (remoteStream) => {
				peerVideo.current.srcObject = remoteStream;
			});
		});
	}

	const callUser = (peerId, stream) => {		
		const call = myPeer.call(peerId, stream);
		callRef.current = call;
		call.on('stream', (remoteStream) => {
			peerVideo.current.srcObject = remoteStream;
		});		
		
	}

	const leaveCall = () => {
		callRef?.current?.close();
		history.replace('/dashboard');
	}


	return (
		<div className='meeting-room'>
			<Video
				peerVideo={peerVideo}
				userVideo={userVideo}
				leaveCall={leaveCall}
			/>
			<Chat user={user} socket={socket} roomId={id} />
		</div>
	);
};

export default Meeting;
