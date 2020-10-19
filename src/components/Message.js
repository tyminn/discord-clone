import React from 'react'
import "../css/Message.css";
import { MdPerson } from 'react-icons/md';

function Message({timestamp,user,message}) {
    return (
        <div className="message">
            <MdPerson className="sidebar__profileIcon" />
            <div className="message__info">
                <h4>{user.email}
                 <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
