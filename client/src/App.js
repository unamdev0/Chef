import React from "react";
import ReactDOM from 'react-dom'
import NewReceipe from './components/NewReceipe/NewReceipe'
import Login from './components/Login&SignUP/Login'
import Profile from './components/Profile/Profile'
import "./App.css";

function App() {
  return (
      <div className="App">
          {/* <NewReceipe/> */}
          <Login/>
          {/* <Profile/> */}
      </div>
  );
}

export default App;
