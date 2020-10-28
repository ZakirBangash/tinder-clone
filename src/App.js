import './App.css';
import Header from './Header';
import Chats from './Chats'
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
     
     <Routes>
          <Route path="/" element={<Header  />} /> 
          <Route path="chats" element={<Header backButton="/" />} >
           <Route path="/" element={<Chats  />} /> 
            </Route> 
        
       
      </Routes>
    </div>
  );
}

export default App;
