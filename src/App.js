//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Card from './Card.js';
import Home from './Home.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/card" element={<Card />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
