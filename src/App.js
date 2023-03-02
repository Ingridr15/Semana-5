import logo from './logo.svg';
import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Semana from './Components/Semana';
import Lenguaje from './Components/Lenguaje';
import Temas from './Components/Temas';
import Click from './Components/Click';

function App() {
  return (
    <div className="App">
      <Semana />
      <Lenguaje />
      <Temas />
      <Click />
    </div>
  );
}

export default App;

