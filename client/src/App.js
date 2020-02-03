import React from "react";
import Navs from './components/landing/navbar'
import FormPage from './components/formPage/formPage'
import ReceipeHOC from './hoc/ReceipeHOC'
import './App.css'

function App() {
  return (
    <div className="App">
    {/* <Navs/>
    <FormPage/> */}
    <ReceipeHOC/>
  </div>);
}

export default App;


