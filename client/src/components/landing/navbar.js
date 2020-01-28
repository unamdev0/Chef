import React from "react";
import "./navbar.css";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InputIcon from '@material-ui/icons/Input';
const Navs = props => {
  return (
    <div className="Navbar">
      The Chef
      <input type="text" placeholder="Search for receipes or user"></input>
      <span className="login">  
       <span> <a href="#">Login <VpnKeyIcon/></a></span>
       <span> <a href="#">
          Signup <InputIcon/>
        </a>
        </span>
      </span>
    </div>
  );
};

export default Navs;
