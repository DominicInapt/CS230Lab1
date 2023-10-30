//import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <h1>CS 230L</h1>
      <h2>Section-002</h2>
      <p>WVU ID:800395463</p> 
      <p>Hi I am Dominic</p>
      <Card />
      


    </div>
  );
}

export default App;
