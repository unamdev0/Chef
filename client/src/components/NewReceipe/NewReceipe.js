import React, { Component } from "react";
import Enter from "../../UI/Enter/Enter";
import "./NewReceipe.css";
import Modal from "../../UI/Modal/Modal";
import Cus_Button from "../../UI/Cus_Button/Cus_Button";
import axios from "axios";
import { connect } from "react-redux";
class NewReceipe extends Component {
  handleSubmit = event => {
    event.preventDefault();
    if(this.props.newReceipeData.tempIngredient!=null){
      this.props.onChanging({ category: "ingredient", value: this.props.newReceipeData.tempIngredient })
    }
    if(this.props.newReceipeData.tempInstruction!=null){
      this.props.onChanging({ category: "instruction", value: this.props.newReceipeData.tempInstruction })
    }
    const newReceipe = this.props.newReceipeData;
    axios.post("/user/newReceipe", {token:this.props.token,newReceipe}).then(res => {
      console.log(res.data);
    });
  };

  handleChange = (e, type) => {
    e.preventDefault();
    if (type === "instruction") {
      this.props.onChanging({ category: "instruction", value: e.target.value });
    } else {
      this.props.onChanging({ category: "ingredient", value: e.target.value });
    }
  };

  renderInstruction() {
    if (
      this.props.newReceipeData.ingredientsCount == 0 ||
      this.props.newReceipeData.instructionsCount == 0
    ) {
      return <div></div>;
    } else {
      let instructionsEnter = [];
      let ingredientsEnter = [];
      for (let i = 0; i < this.props.newReceipeData.ingredientsCount; i++) {
        ingredientsEnter.push(
          <div>
            <Enter
              width="50%"
              key={i}
              handleChange={e => {
                this.handleChange(e, "ingredient");
              }}
            />
            <br />
          </div>
        );
      }
      for (let i = 0; i < this.props.newReceipeData.instructionsCount; i++) {
        instructionsEnter.push(
          <div>
            <Enter
              width="80%"
              key={i}
              handleChange={e => {
                this.handleChange(e, "instruction");
              }}
            />
            <br />
          </div>
        );
      }
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Ingredients Needed</h2>
          {ingredientsEnter}
          <Cus_Button
            onclick={() => {
              this.props.onAddingIngredient();
            }}
            title="Add more items"
          />
          <h2>Instructions</h2>
          {instructionsEnter}
          <Cus_Button
            onclick={() => {
              this.props.onAddingInstruction();
            }}
            title="Add more items"
          />
          <input
            style={{ width: "15%", display: "inline" }}
            className="submitButton"
            type="submit"
          />
        </form>
      );
    }
  }

  render() {
    return (
      <Modal isVisible={true}>
        <div style={{ textAlign: "center" }}>
          <div>
            <h2>Title</h2>
            <Enter />
          </div>
          <div>
            <h2>Image link</h2>
            <Enter />
          </div>
          <div>{this.renderInstruction()}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    newReceipeData: state.newReceipe,
    token:state.token
  };
};

const mapDispatchToProsps = dispatch => {
  return {
    onAddingIngredient: () =>
      dispatch({
        type: "newReceipeIngredient",
        payload: null
      }),
    onAddingInstruction: instruction =>
      dispatch({
        type: "newReceipeInstruction",
        payload: instruction
      }),
    onChanging: data =>
      dispatch({
        type: "ChangeTemp",
        payload: data
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProsps)(NewReceipe);
