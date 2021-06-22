import React from 'react';
import './Video.css';
import { Avatar, IconButton } from '@material-ui/core';
//import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
//import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const Video = () => {
	return (
		<div className='video-container'>
			<div className='video-live'>
				<div className='user'>
					<div className='mentorpic'>
						<Avatar
							variant='square'
							style={{ width: 200, height: 200 }}
						/>
					</div>
					<div className='menteepic'>
						<Avatar
							variant='square'
							style={{ width: 200, height: 200 }}
						/>
					</div>
				</div>
			</div>
			<div className='buttons'>
				<IconButton>
					<VideocamOffIcon style={{ color: 'black' }} />
				</IconButton>
				<IconButton>
					<MicOffIcon style={{ color: 'black' }} />
				</IconButton>
				<IconButton>
					<CallEndIcon style={{ color: 'red' }} />
				</IconButton>
				<IconButton>
					<ChatBubbleIcon style={{ color: 'black' }} />
				</IconButton>
			</div>
		</div>
	);
};

export default Video;
