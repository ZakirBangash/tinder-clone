import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import Header from './Header'



const Chat = ({name,message,timestamp,profilePic}) => {
    return (
        
        <div className="chat">
        <Avatar alt={name} src={profilePic} />
        <div className="chat__detail">
           <h2>{name}</h2>
           <p>{message}</p>
        </div>
       <p className="chat__timeStamp">{timestamp}</p>
        </div>

        
    )
}

export default Chat
