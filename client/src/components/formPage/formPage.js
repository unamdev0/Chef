import React, { Component } from "react";
import "./formPage.css";
import Enter from "../../UI/Enter/Enter";
import Cus_Button from "../../UI/Cus_Button/Cus_Button";
import axios from "axios";
import { connect } from "react-redux";

class FormPage extends Component {
  handleSubmit = (event,type) => {
    if(type==="ingredients"){
    event.preventDefault();
    
    const ingredients = this.props.ingredients;
    axios.post("/ingredients", { ingredients }).then(res => {
      if (res.data) {
        this.props.onAddingReceipes(res.data);
        this.props.history.push('/receipes');
      }
    });
  }else{
    event.preventDefault();
      const receipe=(document.getElementsByName("receipeSearch")[0].value)
      axios.post("/receipe",{receipe}).then(res=>{
        if(res.data){
          this.props.onReceipeSearch(res.data)
          this.props.history.push('/receipes');

        }
      })
  }
  };

  handleChange = (e) => {
    e.preventDefault();
    this.props.TempData(e.target.value);
  }

  ingredientsSearch() {
    if (this.props.ingredientsCount == 0) {
      return <div></div>;
    } else {
      let enter = [];
      for (let i = 0; i < this.props.ingredientsCount; i++) {
        enter.push(
          <div>
            <Enter
              width="50%"
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
        <form onSubmit={(e)=>{this.handleSubmit(e,"ingredients")}}>
          {enter}
          <input style={{width:"15%",display:"inline"}} className="submitButton" type="submit" />
          <Cus_Button
          onclick={(e) => {
            e.preventDefault()
            this.props.onAddingIngredient();
          }}
          title="Add more items"
        />
        </form>
      );
    }
  }

  render() {
    return (
      <div>
      <div className="main">
        <h2>What ingredients do you have?</h2>
        {this.ingredientsSearch()}
      </div>
      <div className="main">
        <h2>Search For a receipe</h2>
        <form onSubmit={(e)=>{this.handleSubmit(e,"receipe")}}>
        <Enter
              name="receipeSearch"
              width="50%"
            />
          <input style={{width:"15%",display:"inline"}} className="submitButton" type="submit" />
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    ingredientsCount: state.ingredientsCount,
    tempIngredient: state.tempIngredient,
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
    },
    onReceipeSearch:receipeData=>{
      dispatch({ type: "ReceipeSearch", payload: receipeData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
