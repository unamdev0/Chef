import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div
        style={{
          
          opacity: this.props.isVisible ? "1" : "0",
          transform: this.props.isVisible
            ?"translateY(-100px)"
            : "translateY(-100vh)" ,
        }}
        className="Modal"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;