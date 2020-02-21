import React from "react";
import "./Enter.css";

const Enter = props => {
  return (
    <input className="input"
    required ={props.required?props.required:false}
      name={props.name?props.name:""}
      type={props.type?props.type:"text"}
      onChange={props.handleChange}
      
      placeholder={`${props.placeholder ? props.placeholder : ""}`}
      style={{
        paddingTop: `${props.padup}`,
        marginLeft: `${props.marleft}`,
        width: `${props.width}`,
        height: `${props.height}`,
        display: `${props.display?props.display:"block"}`
      }}
      
    ></input>
  );
};

export default Enter;
