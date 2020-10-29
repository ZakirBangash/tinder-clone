import './App.css';
import Header from './Header';
import Chats from './Chats'
import {
  Routes,
  Route
} from 'react-router-dom';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
     
     <Routes>
          <Route path="/" element={<Header  />} >
            <TinderCards />
          </Route> 
          <Route path="chats" element={<Header backButton="/" />} >
           <Route path="/" element={<Chats  />} /> 
            </Route> 
        
       
      </Routes>
    </div>
  );
}

export default App;
