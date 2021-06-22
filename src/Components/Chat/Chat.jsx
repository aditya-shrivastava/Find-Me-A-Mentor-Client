import React from 'react';
import './Chat.css';
import SendIcon from '@material-ui/icons/Send';
import {TextField} from '@material-ui/core';

const Chat = () => {
    return (
        <div className='chat'> 
            <TextField type='text' placeholder='Type to chat...' />
            <button><SendIcon style={{color:'#34D684'}}/></button>
        </div>
    )
}
export default Chat