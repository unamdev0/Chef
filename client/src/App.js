import React from "react";
import Navs from './components/landing/navbar'
import Cus_Button from './components/utils/Cus_Button'
import Receipe from './components/receipe/receipe'
import './App.css'

function App() {
  return (
    <div className="App">
    <Navs/>
    <Receipe/>
  </div>);
}

export default App;
