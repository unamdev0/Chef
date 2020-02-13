import React,{Component} from 'react'
import Enter from '../../UI/Enter/Enter'
import './NewReceipe.css'
import Modal from '../../UI/Modal/Modal'
import Cus_Button from '../../UI/Cus_Button/Cus_Button'
import axios from 'axios'
import {connect} from 'react-redux'
class NewReceipe extends Component{
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
        <form onSubmit={this.handleSubmit}>
          {enter}
          <input style={{width:"15%",display:"inline"}} className="submitButton" type="submit" />
          <Cus_Button
          onclick={() => {
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
      <div className="main">
        <h2>Ingredients</h2>
        {this.renderEnter()}
        <h2>Instructions</h2>
        {this.renderEnter()}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    newReceipeData:state.newReceipe
  }

}


const mapDispatchToProsps=dispatch=>{
  return{
  }

}


export default connect(mapStateToProps,mapDispatchToProsps)(NewReceipe)