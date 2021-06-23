import React, { useState } from 'react';
import './Chat.css';

import SendIcon from '@material-ui/icons/Send';

const Message = ({body, sender}) => {
	return (
		<p className='text-black'>{body} : {sender}</p>
	);
}


const Chat = ({ socket }) => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	const sendMessage = (e) => {
		e.preventDefault();

		const newMessage = {
			senderId: 10,
			senderName: 'Aditya',
			body: message
		}

		socket.emit('send-message', newMessage);

		setMessages([...messages, newMessage]);
		setMessage('');
	};

	
	socket?.on('receive-message', newMessage => {
		setMessages([...messages, newMessage]);
	});
	

	return (
		<div className='chat'>
			<div className='chat-container'>
				{messages?.map((message, index) => (
					<Message body={message.body} sender={message.senderName} key={index} />
				))}
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
