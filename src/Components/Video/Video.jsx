import React from 'react';
import './Video.css';
import { IconButton } from '@material-ui/core';
//import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
//import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const Video = ({ leaveCall, userVideo, peerVideo }) => {
	return (
		<div className='video-container'>
			<div className='video-live'>
				<video ref={userVideo} autoPlay playsInline muted />
				<video ref={peerVideo} autoPlay playsInline />
			</div>
			<div className='buttons'>
				<IconButton>
					<VideocamOffIcon style={{ color: 'black' }} />
				</IconButton>
				<IconButton>
					<MicOffIcon style={{ color: 'black' }} />
				</IconButton>
				<IconButton>
					<CallEndIcon style={{ color: 'red' }} onClick={leaveCall} />
				</IconButton>
				<IconButton>
					<ChatBubbleIcon style={{ color: 'black' }} />
				</IconButton>
			</div>
		</div>
	);
};

export default Video;
