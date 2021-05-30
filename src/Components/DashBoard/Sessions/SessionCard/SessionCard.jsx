import React from 'react';
import { Card, Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './SessionCard.css';

const SessionCard = () => {
    return (
        <div className='sessioncard'>
            <Card>
                <div className='Live'>
                    <div className='livenow'>
                        <div>
                            Live Now
                            </div>
                        <div className='subject'>
                            Subject
                            </div>
                        <div className='joinbutton'>
                            <button className='joinbtn'>Join Now</button>
                        </div>
                    </div>
                    <div className='m_avatar'>
                        <button><CloseIcon /></button>
                        <div className='mentorImg'>
                            <Avatar style={{ width: 80, height: 80 }} />
                        </div>
                        <div className='mentorName'>
                            Mentor
                        </div>
                    </div>
                </div>
            </Card>

            <Card>
                <div className='upcoming'>
                    <div className='upcomingdetails'>
                        <div className='DandT'>
                            Date&Time
                        </div>
                        <div className='subject'>
                            Subject
                        </div>
                    </div>
                    <div className='m_avatar'>
                        <button><CloseIcon /></button>
                        <div className='mentorImg'>
                            <Avatar style={{ width: 80, height: 80 }} />
                        </div>
                        <div className='mentorName'>
                            Mentor
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default SessionCard