import React from "react";
import Navs from './components/landing/navbar'
import Receipe from './components/receipe/receipe'
import './App.css'

function App() {
  return (
    <div className="app">
    <Navs/>
    <Receipe/>
  </div>);
}

export default App;
