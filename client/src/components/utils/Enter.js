import React from "react";
import "./Enter.css";

const Enter = props => {
  return (
    <input type="text" onChange={props.handleChange} style={{paddingTop:`${props.padup}`,marginLeft:`${props.marleft}`,width:`${props.width}`,height:`${props.height}`}} placeholder={`${props.placeholder? props.placeholder:""}`}></input>
  );
};

export default Enter;
