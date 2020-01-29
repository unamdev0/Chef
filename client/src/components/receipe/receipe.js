import React from 'react'
import './receipe.css'
import Enter from '../utils/Enter'
import Cus_Button from '../utils/Cus_Button'


const Receipe=props=>{
    return(
    <div className="main">
        <h2>What ingredients do you have?</h2>
        <Enter /><br/>
        <Cus_Button onClick title="Add more items" />
    </div>
    )
    
}

export default Receipe