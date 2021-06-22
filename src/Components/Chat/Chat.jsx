import React, { useState } from 'react';
import './Chat.css';

import SendIcon from '@material-ui/icons/Send';

const Chat = () => {
	const sendMessage = (e) => {
		e.preventDefault();
	};

	const [message, setMessage] = useState('');
	return (
		<div className='chat'>
			<div className='chat-container'>
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
