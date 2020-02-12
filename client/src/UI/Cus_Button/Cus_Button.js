import React from 'react'
import './Cus_Button.css'

const Cus_Button=props=>{
    return(
        <button onClick={props.onclick} title={props.title}>+</button> 
    )
}


export default Cus_Button