import React from "react";
import "./navbar.css";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InputIcon from "@material-ui/icons/Input";
import Enter from "../../UI/Enter/Enter";
import { Link } from "react-router-dom";

const Navs = props => {
  return (
    <div className="Navbar">
      <div style={{ display: "inline" }}>
        <Link
          to="/"
          style={{
            fontFamily: "monospace"
          }}
        >
          The Chef
        </Link>
      </div>
      <Enter display="inline-block"
      marleft="20%"
      width="400px"
        placeholder="Search for a receipe or user"
      />
      <span className="loginContainer">
        <span>
          <a href="/login">
            Login <VpnKeyIcon />
          </a>
        </span>
        <span>
          <a href="/register">
            Signup <InputIcon />
          </a>
        </span>
      </span>
    </div>
  );
};

export default Navs;
