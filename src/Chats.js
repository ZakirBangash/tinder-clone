import React,{useContext} from 'react'
import Chat from './Chat';
import {
    // rest of the elements/components imported remain same
    Outlet
  } from 'react-router-dom';

  import { GlobalContext } from './Context'


const Chats = () => {
    const {storeProducts} = useContext(GlobalContext);
    return (
        <div className="chats">
        
            {Object.entries(storeProducts).map(([slug,{name,message,timestamp,profilePic}]) =>(
                 <Chat name={name} message={message} timestamp={timestamp} profilePic={profilePic} /> 
            )) }
                
                <Outlet /> 
        </div>
    )
}

export default Chats
