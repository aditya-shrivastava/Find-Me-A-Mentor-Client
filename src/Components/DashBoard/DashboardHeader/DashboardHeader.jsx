import React from 'react';
import './DashboardHeader.css';
import Avatar from '@material-ui/core/Avatar';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ChatIcon from '@material-ui/icons/Chat';
import Badge from '@material-ui/core/Badge';
import Notification from '../Notification/Notification';
import Review from '../Review/Review';



const DashBoard = () => {

    return (
        <div className='DashBoard'>
            <div className='DashBoardHeader'>
                <div className='leftcard'>
                    <div className='Avatar'> <Avatar style={{ width: 180, height: 180 }} /></div>
                    <div className='UserName'>
                        <h2>Jessica James</h2>
                        <div className='Icon'>
                            <TurnedInIcon style={{ color: '#13C953', fontSize: 35, borderColor: '#E9E9E9', }} />
                            <span>Digital Creator</span>
                        </div>
                        <div className='Bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
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
            <div className='lowercard'>
                <Notification />
                <Review />
            </div>
        </div>
    )

}

export default DashBoard