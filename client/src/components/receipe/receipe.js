import React, { Component } from "react";
import "./receipe.css";
import Enter from "../utils/Enter";
import Cus_Button from "../utils/Cus_Button";
import axios from "axios";
import { connect } from "react-redux";

class Receipe extends Component {
  state = {
    ingredientsCount: 1,
    ingredients: "",
    tempIngredient: ""
  };

  incrementCounter = () => {
    const ingredientsCount=this.props.incrementCount
  };

  handleSubmit = event => {
    event.preventDefault();
    const ingredients = this.state.ingredients;
    console.log("here");
    axios.post("/ingredients", { ingredients }).then(res => {
      console.log("res", res);
      if (res.data) {
        
      }
    });
  };

  // handleChange = e => {
  //   this.setState({
      
  //   });
  // };

  renderEnter() {
    if (this.state.ingredientsCount == 0) {
      return <div></div>;
    } else {
      let enter = [];
      for (let i = 0; i < this.state.ingredientsCount; i++) {
        enter.push(
          <div>
            <Enter
              key={i}
              handleChange={e => {
                this.handleChange(e);
              }}
            />
            <br />
          </div>
        );
      }
      return (
        <form onSubmit={this.handleSubmit}>
          {enter}
          <input type="submit" />
        </form>
      );
    }
  }

  render() {
    return (
      <div className="main">
        <h2>What ingredients do you have?</h2>
        {this.renderEnter()}
        <Cus_Button
          onclick={() => {
            this.incrementCounter();
          }}
          title="Add more items"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredients, ingredientsCount: state.ingredientsCount,tempIngredient:state.tempIngredient };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingIngredient: () =>
      dispatch({ type: "Add_Ingredients", payload: "" }),
    onAddingUsername: tempData => {
      dispatch({ type: "Temp_Ingredients", payload: tempData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipe);