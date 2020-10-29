import './App.css';
import Header from './Header';
import Chats from './Chats'
import {
  Routes,
  Route
} from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';


function App() {
  return (
    <div className="app">
     
     <Routes>
          <Route path="/" element={<>
          
          <Header  />
          <TinderCards />
          <SwipeButton />
          </> } >
            
          
          </Route> 
          <Route path="chats" element={<><Header backButton="/" /> <Chats  /></>} />
          
          
          
                 
      </Routes>

    </div>
  );
}

export default App;
