import React from "react";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Signup.css";
import Enter from "../../UI/Enter/Enter";
import Axios from "axios";
import qs from "qs";
import { connect } from "react-redux";


const validation = (e,isAuthenticated) => {
  e.preventDefault();
  const confirmPassword = document.forms["signup"]["confirmPassword"].value;
  const password = document.forms["signup"]["password"].value;
  const username = document.forms["signup"]["username"].value;
  const name = document.forms["signup"]["name"].value;
  const email = document.forms["signup"]["email"].value;
  try {
    Axios({
      method: "post",
      url: "/user/register",
      data: qs.stringify({
        confirmPassword,
        password,
        username,
        name,
        email
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    })
      .then(data => {
        isAuthenticated(data.data.token)
      })
      .catch(function(error) {
        alert(error)
        console.log("wewrw", error);
      });
  } catch (e) {
    console.log("dasf", e);
  }
};

const Signup = props => {
  return (
    <div>
      <Backdrop isVisible={true} />
      <Modal isVisible={true}>      
        <form name="signup" onSubmit={(e)=>{validation(e,props.isAuthenticated)}}>
          <div className="signup">
            <h1>Signup</h1>
            <div className="cred">Name</div>
            <Enter required={true} name="name" width="90%" />
            <div className="cred">Email</div>
            <Enter type="email" required={true} name="email" width="90%" />
            <div className="cred">Username</div>
            <Enter required={true} name="username" width="90%" />
            <div className="cred">Password</div>
            <Enter
              required={true}
              name="password"
              type="password"
              width="90%"
            />
            <div className="cred">Confirm Password</div>
            <Enter
              required={true}
              type="password"
              name="confirmPassword"
              width="90%"
            />
            <input className="submitButton" type="submit" />
          </div>
        </form>
        
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return { token: state.token};
};

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: token =>
      dispatch({ type: "isAuthenticated", payload: token }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
