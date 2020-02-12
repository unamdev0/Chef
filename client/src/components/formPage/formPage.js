import React, { Component } from "react";
import "./formPage.css";
import Enter from "../../UI/Enter/Enter";
import Cus_Button from "../../UI/Cus_Button/Cus_Button";
import axios from "axios";
import { connect } from "react-redux";

class FormPage extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const ingredients = this.props.ingredients;
    axios.post("/ingredients", { ingredients }).then(res => {
      console.log("res", res);
      if (res.data) {
        this.props.onAddingReceipes(res.data);
      }
    });
  };

  handleChange = e => {
    this.props.TempData(e.target.value);
  };

  renderEnter() {
    if (this.props.ingredientsCount == 0) {
      return <div></div>;
    } else {
      let enter = [];
      for (let i = 0; i < this.props.ingredientsCount; i++) {
        enter.push(
          <div>
            <Enter
              width="80%"
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
            this.props.onAddingIngredient();
          }}
          title="Add more items"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    ingredientsCount: state.ingredientsCount,
    tempIngredient: state.tempIngredient
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingIngredient: () =>
      dispatch({ type: "Add_Ingredients", payload: "" }),
    TempData: tempData => {
      dispatch({ type: "Temp_Ingredients", payload: tempData });
    },
    onAddingReceipes: receipeData => {
      dispatch({ type: "Receipe_data", payload: receipeData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
