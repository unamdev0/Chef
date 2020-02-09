import React from "react";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Signup.css";
import Enter from "../../UI/Enter/Enter";


const validation=()=>{

}


const Signup = props => {
  return (
    <div>
      <Backdrop isVisible={true} />
      <Modal isVisible={true}>
        <form onSubmit={validation} >
          <div className="signup">
            <h1>Signup</h1>
            <div className="cred">Name</div>
            <Enter required={true} name="name" width="90%" />
            <div className="cred">Email</div>
            <Enter required={true} name="email" width="90%" />
            <div className="cred">Username</div>
            <Enter required={true} name="username" width="90%" />
            <div className="cred">Password</div>
            <Enter required={true} name="password" type="password" width="90%" />
            <div className="cred">Confirm Password</div>
            <Enter required={true} type="password" name="confirmPassword" width="90%" />
            <input className="submitButton" type="submit" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Signup;
