import React, {useState, useEffect} from 'react';
import "../css/Chat.css";
import ChatHeader from './ChatHeader';
import { MdAddCircle, MdGif } from 'react-icons/md';
import { FaGift } from 'react-icons/fa';
import { HiEmojiHappy } from 'react-icons/hi';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import db from '../firebase';
import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapchot) => {
                setMessages(snapchot.docs.map((doc)=>doc.data()))
            });
        }
    },[channelId])


    const sendMessage = (e) => {
        e.preventDefault();

            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user:user
            })
            
            setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((message,index) => (
                    <Message
                        key={index}
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>
            <div className="chat__input">
                <MdAddCircle className="chat__inputIcon"/>
                <form>
                    <input type="text" placeholder={`Messege ${channelName}`} value={input} onChange={(e) => setInput(e.target.value)} disabled={!channelId}/>
                    <button type="submit" className="chat__inputButton" onClick={sendMessage} disabled={!channelId}>Send message</button>
                </form>
                <div className="chat__inputIcons">
                    <FaGift className="chat__inputIcon"/>
                    <MdGif className="chat__inputIcon"/>
                    <HiEmojiHappy className="chat__inputIcon"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
