import React from "react";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./login.css";
import Enter from "../../UI/Enter/Enter";
import Axios from "axios";
import qs from "qs";

const validation = e => {
  e.preventDefault();
  const password = document.forms["signup"]["password"].value;
  const username = document.forms["signup"]["username"].value;
  try {
    Axios({
      method: "post",
      url: "/user/login",
      data: qs.stringify({
        password,
        username,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(data => {
        console.log("data", data);
      })
      .catch(function(error) {
        console.log("wewrw", error);
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
        <form name="login" onSubmit={e=>{validation(e)}}>
          <div className="login">
            <h1>Login</h1>
            <div className="cred">Username</div>
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

export default Login;
