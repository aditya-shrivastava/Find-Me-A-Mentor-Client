import React from 'react';
import './DashboardHeader.css';

import Avatar from '@material-ui/core/Avatar';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';


const DashboardHeader = () => {
    const {user} = useSelector(selectUser);

    return (
            <div className='DashboardHeader'>
                <div className='leftcard'>
                    <Avatar src={user?.image && `http://localhost:5000/${user.image}`} style={{ width: 100, height: 100 }} />
                    <div className='user-details'>
                        <h2>{user?.username || 'Jessica James'}</h2>
                        <div className='icon'>
                            <TurnedInIcon style={{ color: '#13C953', fontSize: 35, borderColor: '#E9E9E9', }} />
                            {user?.category || 'Digital Creator'}
                        </div>
                        <p>{user?.bio || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
                    </div>
                </div>
                <div className='rightcard'>
                    <div className='MessageIcon'>
                        <Badge overlap='circle' anchorOrigin={{ vertical: 'top', horizontal: 'right'}}>
                            <button className='MessageIconbtn'>
                                <ChatIcon style={{ color: '#757171', fontSize: 35 }} />
                            </button>
                        </Badge>
                        <span>No new messages!</span>
                    </div>
                    
                </div>
                
            </div>
    )

}

export default DashboardHeader;