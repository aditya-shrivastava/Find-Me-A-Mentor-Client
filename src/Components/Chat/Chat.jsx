import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';

import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core';

const Message = ({ body, senderName, senderImage, senderId }) => {
	return (
		<div className='message'>
			<div className='sender-avatar'>
				<Avatar src={senderImage} alt='sender' />
			</div>
			<div className='message-details'>
				<p className='sender-name'>{senderName}</p>
				<p className='message-body'>{body}</p>
			</div>
		</div>
	);
};

const Chat = ({ socket, user, roomId }) => {
	const blockRef = useRef(null);
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	const sendMessage = (e) => {
		e.preventDefault();

		const newMessage = {
			roomId,
			senderId: user.uid,
			senderName: user.username,
			senderImage: user.image,
			body: message,
		};

		socket.emit('send-message', newMessage);

		setMessages([...messages, newMessage]);
		setMessage('');
	};

	socket?.on('receive-message', (newMessage) => {
		setMessages([...messages, newMessage]);
	});

	useEffect(() => {
		blockRef?.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className='chat'>
			<div className='chat-container'>
				<div className='messages'>
					{messages?.map((message, index) => (
						<Message
							body={message.body}
							senderId={message.senderId}
							senderImage={message.senderImage}
							senderName={message.senderName}
							key={index}
						/>
					))}
					<div className='empty-block' ref={blockRef} />
				</div>
				<form onSubmit={sendMessage}>
					<input
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						type='text'
						placeholder='Type to chat...'
					/>
					<button type='submit'>
						<SendIcon />
					</button>
				</form>
			</div>
		</div>
	);
};
export default Chat;
