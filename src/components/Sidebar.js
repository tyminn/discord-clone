import React, { useEffect } from 'react'
import "../css/Sidebar.css"
import { MdExpandMore, MdAdd, MdPerson } from 'react-icons/md';
import SidebarChannel from './SidebarChannel';
import { AiFillSignal } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import { useState } from 'react';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapchot => (
            setChannels(snapchot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
           })))
       ))
    },[])

    const handleAddChannel = () => {
        const channelName = prompt("enter a new channel name");


        if (channelName) {
            db.collection('channels').add({
                channelName:channelName
            })
        }
    }


    console.log(user);
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Channel Name </h3>
                <MdExpandMore />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <MdExpandMore/>
                        <h4>Text channgels</h4>
                    </div>
                    <MdAdd className="sidebar__addChannel" onClick={handleAddChannel}/>
                </div>
            <div className="sidebar__channelsList">
                    {channels.map(({id, channel}) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                    ))}
            </div>
            </div>
            <div className="sidebar__voice">
                <AiFillSignal className="sidebar__voiceIcon" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
            </div>
            <div className="sidebar__profile">
                <MdPerson className="sidebar__profileIcon" onClick={()=>{auth.signOut()}}/>
                <div className="sidebar__profileInfo">
                    <h3>{user.email}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
