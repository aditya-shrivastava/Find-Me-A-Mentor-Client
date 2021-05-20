import React from 'react';
import './Sessions.css';
import SessionCard from './SessionCard/SessionCard';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Sessions = () => {
    return (
        <div className='Sessions'>
            <div className='upcoming_sessions'>
                <h1>Upcoming Sessions</h1>
                <button><ExpandLessIcon /></button>
            </div>
            <div className='SessionCard'>
                <SessionCard />
            </div>
        </div>
    )

}

export default Sessions