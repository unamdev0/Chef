import React from 'react'
import './receipe.css'

const Receipe = props => {
    const receipeData =(props.receipeData);
    return (
        <div className="main_wrapper">
            <h1>{receipeData.title}</h1>
        </div>
    );
  };
  export default Receipe;