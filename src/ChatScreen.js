import React,{useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import {GlobalContext} from './Context'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'

const ChatScreen = () => {
    const {storeProducts} = useContext(GlobalContext);
    const {slug} = useParams();
    const [input, setInput] = useState();
    const [uMessage, SetUserMessage] = useState([]);
    
  const person =  Object.entries(storeProducts).filter(item => item[1].name === slug);

    const {name,profilePic,message} = person[0][1];
    console.log(name,profilePic);

    const SendMessage = (e) => {
        e.preventDefault();
        SetUserMessage([...uMessage,input]);
        console.log("hiidi")
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">You matched with {slug} </p>
        
                <div className="chatScreen__message">
                <Avatar alt={name} src={profilePic} />
                <p className="chatScreen__text">{message}</p>
                </div>
            
        
            {uMessage.map(mess=>(
                    <div className="chatScreen__message">
                    <p className="chatScreen__Usertext">{mess}</p>
                    </div>
            ))}
                
     
        
           

            <form className="chatScreen__input" >
                <input type="text"
                onChange={(e)=> setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message..."
                />
                <button type='submit' onClick={SendMessage} className="chatScreen__button">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
