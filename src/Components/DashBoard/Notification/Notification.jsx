import React from 'react'
import "./Notification.css";
import NotificationBlock from './NotificationBlock/NotificationBlock';

function Notification() {
    return (
        <div className="notification">
            <div className="your__meet">

                <h1>Organize Your Meet</h1>

                <form className="subject__form">
                    <input type="text" placeholder="Subject" name="subject" />
                    <div className="date__time">
                        <input type="date" placeholder="date" name="date" />
                        <input type="time" placeholder="time" name="time" />
                    </div>
                </form>
                
                <div>
                    <button type="submit" className="add">Add</button>
                </div>

            </div>
            
            <div className="your__notification">
                <h1>Your Appointment</h1>

                <NotificationBlock subject="subject" date="date" time="time"/>
                
            </div>

        </div>
    )
}

export default Notification
