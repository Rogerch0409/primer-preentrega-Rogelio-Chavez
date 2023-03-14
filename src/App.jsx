import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" exact component={Home}></Route>
          
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
