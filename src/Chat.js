import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import Header from './Header'
import {
    // rest of the elements/components imported remain same
    Link
  } from 'react-router-dom';


const Chat = ({name,message,timestamp,profilePic}) => {
    return (
        
        <Link to={`/chats/${name}`} >
        <div className="chat">
        <Avatar alt={name} src={profilePic} />
        <div className="chat__detail">
           <h2>{name}</h2>
           <p>{message}</p>
        </div>
       <p className="chat__timeStamp">{timestamp}</p>
        </div>
        </Link>

        
    )
}

export default Chat
