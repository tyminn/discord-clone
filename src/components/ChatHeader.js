import React from 'react';
import "../css/ChatHeader.css";
import { RiNotification2Fill } from 'react-icons/ri';
import { MdEditLocation, MdPeople, MdSearch, MdHelp, MdSend } from 'react-icons/md';

function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>{channelName}</h3>
            </div>
            <div className="chatHeader__right">
                <RiNotification2Fill className="chatHeader__icon"/>
                <MdEditLocation className="chatHeader__icon"/>
                <MdPeople className="chatHeader__icon"/>

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search" />
                    <MdSearch className="chatHeader__icon"/>
                </div>
                <MdHelp className="chatHeader__icon"/>
                <MdSend className="chatHeader__icon"/>
            </div>
        </div>
    )
}

export default ChatHeader
