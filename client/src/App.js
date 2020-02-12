import React from "react";
import Navs from './components/landing/navbar'
import FormPage from './components/formPage/formPage'
import ReceipeHOC from './hoc/ReceipeHOC'
import Login from './components/Login&SignUP/Login'
import Signup from './components/Login&SignUP/Signup'
import NewReceipe from './components/NewReceipe/NewReceipe'
import './App.css'

function App() {
  return (
    <div className="App">
     {/* <Navs/> */}
     {/* <Login/> */}
     {/* <NewReceipe/> */}
     {/* <Signup/> */}
    <FormPage/> 
    {/* <ReceipeHOC/> */}
  </div>);
}

export default App;


