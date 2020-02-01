import React, { Component } from "react";
import "./receipe.css";
import Enter from "../utils/Enter";
import Cus_Button from "../utils/Cus_Button";

class Receipe extends Component {
  state = {
    ingredients: 1
  };

  incrementCounter = () => {
   var p= this.setState({
      ingredients: this.state.ingredients + 1
    })
  };
  

  renderEnter() {
    var i = 0;
    if(this.state.ingredients==0){
      return <div></div>
    }else{
      let enter = []
      for (let i = 0; i <this.state.ingredients; i++) {
        enter.push(<div><Enter/><br/></div>)
      }
      return (<form>{enter}</form>) 
    }
  }


  render() {
    return (
      <div className="main">
        <h2>What ingredients do you have?</h2>
        {this.renderEnter()}
        <Cus_Button onclick={()=>{this.incrementCounter()}} title="Add more items" />
      </div>
    );
  }
}

export default Receipe;
