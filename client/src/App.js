import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navs from "./components/landing/navbar";
import FormPage from "./components/formPage/formPage";
import ReceipeHOC from "./hoc/ReceipeHOC";
import Login from "./components/Login&SignUP/Login";
import Signup from "./components/Login&SignUP/Signup";
import NewReceipe from "./components/NewReceipe/NewReceipe";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navs />
        <Route exact path="/" component={FormPage} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} /> */}
        {/* <Login/> */}
        {/* <NewReceipe/> */}
        {/* <Signup/> */}
        {/* <FormPage/>  */}
        <ReceipeHOC/>
      </div>
    </Router>
  );
}

export default App;
