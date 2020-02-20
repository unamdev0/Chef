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

  handleChange = (e,i) => {
   console.log(i)
    this.props.onChanging(i,e.target.value);

  };

  renderInstruction() {
    if (this.props.newReceipeData.ingredientsCount == 0 || this.props.newReceipeData.instructionsCount==0) {
      return <div></div>;
    } else {
      let value=["dsf"]
      let instructionsEnter = [];
      let ingredientsEnter =[]
      for (let i = 0; i < this.props.newReceipeData.ingredientsCount; i++) {
        ingredientsEnter.push(
          <div>
            <Enter
              width="50%"
              key={i}
              value={this.props.newReceipeData.ingredients[i]}
              handleChange={(e,i) => {
                this.handleChange(e,i);
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
              width="50%"
              key={i}
              // value={this.props.newReceipeData.instruction[i]}
              handleChange={(e) => {
                console.log(`${i}`)
                this.handleChange(e,`${i}`);
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
          {/* <input style={{width:"15%",display:"inline"}} className="submitButton" type="submit" /> */}
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
    }),
    onAddingInstruction:instruction=>dispatch({
      type:'newReceipeInstruction',payload:instruction
    }),
    onChanging:(i,val)=>dispatch({
      type:"changeIngredient",payload:{i,val}
    })
  }

}


export default connect(mapStateToProps,mapDispatchToProsps)(NewReceipe)