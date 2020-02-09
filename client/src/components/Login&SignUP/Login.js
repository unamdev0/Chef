import React from "react";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./login.css";
import Enter from "../../UI/Enter/Enter";

const Login = props => {
  return (
    <div>
      <Backdrop isVisible={true} />
      <Modal isVisible={true}>
        <form>
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
