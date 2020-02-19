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
  
  };

  handleChange = e => {
    this.props.newReceipeData.TempData(e.target.value);

  };

  renderInstruction() {
    if (this.props.ingredientsCount == 0) {
      return <div></div>;
    } else {
      let instructionsEnter = [];
      for (let i = 0; i < this.props.newReceipeData.ingredientsCount; i++) {
        instructionsEnter.push(
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
          <h2>Ingredients Needed</h2>
          {instructionsEnter}
          {/* <input style={{width:"15%",display:"inline"}} className="submitButton" type="submit" /> */}
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
      <div className="newReceipe">
        <div><h2>Title</h2><Enter/></div>
        <div>
        {this.renderInstruction()}</div>
        <h2>Instructions</h2>
        {/* {this.renderEnter()} */}
        <div>
        <h2>Image link</h2>
        <Enter/>
        </div></div>
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
    onAddingIngredient:()=>dispatch({
      type:'newReceipeIngredient',payload:null
    })
  }

}


export default connect(mapStateToProps,mapDispatchToProsps)(NewReceipe)