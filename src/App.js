import "./App.css";
import Header from "./Header";
import Chats from "./Chats";
import { Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import { ProductProvider } from './Context';
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <ProductProvider>
    <div className="app">
      <Routes>

        <Route path="/" element={
            <>
              <Header />
              <TinderCards />
              <SwipeButton />
            </>
          }
        />

        <Route path="chats"  >
         
         <Route path="/" element={<><Header backButton="/" /> <Chats /> </>} />

        <Route
          path=":slug"
          element={
            <>
              <Header backButton="/chats" />            
              <ChatScreen />
            </>
          }
        />
      </Route>


      </Routes>
    </div>
    </ProductProvider>
  );
}

export default App;
