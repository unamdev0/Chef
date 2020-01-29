import React from "react";
import "./Enter.css";

const Enter = props => {
  const p = props.pad;
  return (
    <input type="text" style={{paddingTop:`${props.padup}`,marginLeft:`${props.marleft}`,width:`${props.width}`,height:`${props.height}`}} placeholder={`${props.placeholder? props.placeholder:""}`}></input>
  );
};

export default Enter;
