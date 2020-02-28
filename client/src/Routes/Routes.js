import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormPage from "../components/formPage/formPage";
import Login from "../components/Login&SignUP/Login";
import Signup from "../components/Login&SignUP/Signup";
import Profile from '../components/Profile/Profile'
import NewReceipe from '../components/NewReceipe/NewReceipe'
import ReceipeHOC from "../hoc/ReceipeHOC";

const Routes = () => (
  <Router>
    <Route path="/receipes" component={ReceipeHOC} />
    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/newReceipe" component={NewReceipe}/>
    <Route exact path="/" component={FormPage} />
  </Router>
);

export default Routes;
