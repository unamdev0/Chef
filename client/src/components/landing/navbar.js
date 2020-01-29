import React from "react";
import "./navbar.css";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InputIcon from '@material-ui/icons/Input';
import Enter from '../utils/Enter'

const Navs = props => {
  return (
    <div className="Navbar">
      <div style={{display:"inline"}}>The Chef</div>
      <Enter placeholder="Search for a receipe or user" marleft="20%" width="35%" height="55%"/>
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
