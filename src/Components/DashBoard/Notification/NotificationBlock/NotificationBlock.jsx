import React from 'react'
import "./NotificationBlock.css"

function NotificationBlock({ subject, date, time }) {
    return (
        <div className="notif__block">
            <p>{subject}</p>
            <p>{date}</p>
            <p>{time}</p>
        </div>
    )
}

export default NotificationBlock
