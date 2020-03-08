import React from "react";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./login.css";
import Enter from "../../UI/Enter/Enter";
import Axios from "axios";
import qs from "qs";
import { connect } from "react-redux";

const validation = (e, isAuthenticated,props) => {
  e.preventDefault();
  const password = document.forms["login"]["password"].value;
  const username = document.forms["login"]["username"].value;
  try {
    Axios({
      method: "post",
      url: "/user/login",
      data: qs.stringify({
        password,
        emailorUsername: username
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(data => {
        props.history.push("/")
        isAuthenticated(data.data.token, data.data.userInfo);
      })
      .catch(function(error) {
        alert(error);
      });
  } catch (e) {
    console.log("dasf", e);
  }
};

const Login = props => {
  return (
    <div>
      <Backdrop isVisible={true} />
      <Modal isVisible={true}>
        <form
          name="login"
          onSubmit={e => {
            validation(e, props.isAuthenticated,props);
          }}
        >
          <div className="login">
            <h1>Login</h1>
            <div className="cred">Email or Username</div>
            <Enter name="username" width="90%" />
            <div className="cred">Password</div>
            <Enter name="password" type="password" width="90%" />
            <input className="submitButton" type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return { token: state.token };
};

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: (token, userInfo) =>
      dispatch({ type: "isAuthenticated", payload: { token, userInfo } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
