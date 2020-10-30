import "./App.css";
import Header from "./Header";
import Chats from "./Chats";
import { Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";
import { ProductProvider } from './Context';

function App() {
  return (
    <ProductProvider>
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <TinderCards />
              <SwipeButton />
            </>
          }
        ></Route>

        <Route
          path="chats"
          element={
            <>
              <Header backButton="/" /> <Chats />
          
            </>
          }
        />

        <Route
          path="chats/:person"
          element={
            <>
              <Header backButton="/chats" /> 
            <h2>How are YOu</h2>
            </>
          }
        />

      </Routes>
    </div>
    </ProductProvider>
  );
}

export default App;
