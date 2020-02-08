import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.isVisible !== this.props.isVisible ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <div
        style={{
          opacity: this.props.isVisible ? "1" : "0",
          transform: this.props.isVisible
            ?"translateY(-100px)"
            : "translateY(-100vh)" 
        }}
        className="Modal"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Modal;