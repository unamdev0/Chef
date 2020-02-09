import React from "react";
import "./Enter.css";

const Enter = props => {
  return (
    <input className="input"
    required ={props.required?props.required:false}
      name={props.name?props.name:""}
      type={props.type?props.type:"text"}
      onChange={props.handleChange}
      style={{
        paddingTop: `${props.padup}`,
        marginLeft: `${props.marleft}`,
        width: `${props.width}`,
        height: `${props.height}`
      }}
      placeholder={`${props.placeholder ? props.placeholder : ""}`}
    ></input>
  );
};

export default Enter;
