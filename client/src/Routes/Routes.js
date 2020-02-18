import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import FormPage from '../components/formPage/formPage'
import Login from '../components/Login&SignUP/Login'
import Signup from '../components/Login&SignUP/Signup'
import ReceipeHOC from '../hoc/ReceipeHOC'


const Routes = () => (
    <Router>
                    <Route path="/receipes" component={ReceipeHOC} />
            <Route exact path="/" component={FormPage} />
    </Router>
);

export default Routes;