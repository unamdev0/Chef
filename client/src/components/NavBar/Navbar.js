import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InputIcon from "@material-ui/icons/Input";

class Navs extends Component {
  but() {
    console.log(this.props.token);
    if (this.props.token === null) {
      return (
        <span className="login-nav">
          <span>
            {" "}
            <a href="/Login">
              Login <VpnKeyIcon />
            </a>
          </span>
          <span>
            {" "}
            <a href="/signup">
              Signup <InputIcon />
            </a>
          </span>
        </span>
      );
    } else {
      return (
        <span  className="login-nav">
          <a onClick={() => this.props.logout()} href="#">
            Logout <InputIcon />
          </a>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="Navbar">
        The Chef
        {this.but()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "Logout", payload: {} })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navs);
