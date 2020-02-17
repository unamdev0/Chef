import React from "react";
import "./receipe.css";
import { connect } from "react-redux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Modal from "../../UI/Modal/Modal";

const Receipe = props => {
  let Rec = (
    
    <div></div>
  );
  const receipeData = props.receipeData;
  if(props.type=="ingredientSearch"){
  
  let ingredients = () => {
    return (
      <div className="Ingredients">
        Ingredients:
        <ul>
          {receipeData.usedIngredients.map(ingredient => {
            return <li>{ingredient.originalString}</li>;
          })}
        </ul>
      </div>
    );
  };
 
  
  let points = () => {
    var Arr = receipeData.instructions.split("\n");
    Arr = Arr.filter(function(el) {
      return el;
    });
    if (Arr[0] == "Instructions") {
      Arr.splice(0, 1);
    }
    return Arr.map(instruction => {
      return <li>{instruction}</li>;
    });
  };

  

  let MissingIngredients = () => {
    if (receipeData.missedIngredientCount != 0) {
      return (
        <div>
          Missing Ingredients:
          <ul>
            {receipeData.missedIngredients.map(ingredient => {
              return <li>{ingredient.originalString}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return;
    }
  };

  
  if (props.Selected.isSelected && props.Selected.index==props.index) {
    Rec = (
      <div>
      <Backdrop isVisible={true}/>
       <Modal isVisible={true} >
         <div className="main_wrapper">
        <h2>{props.Selected.receipeData.title}</h2>
        <img src={props.Selected.receipeData.image} />
        <div>
          <ul>{ingredients()}</ul>
        </div>
        {MissingIngredients()}
        <div>
          Instructions:
          <ul>{points()}</ul>
        </div>
      </div>
      </Modal>
      </div>
    );
  }

  return(<div><div
    className="sss"
    onClick={() => {
      props.onSelection({
        isSelected: true,
        index: props.index,
        receipeData: props.receipeData
      });
    }}
  >
    <img src={`${receipeData.image}`} />
    <h3>{receipeData.title}</h3>
     {ingredients()}
  </div> { Rec }</div>);
  }else{
    return(
    <div><div
      className="sss"
      onClick={() => {
        props.onSelection({
          isSelected: true,
          index: props.index,
          receipeData: props.receipeData
        });
      }}
    >
      <img className="ReceipeImage" src={`${props.imageUrl+receipeData.image}`} />
      <h3>{receipeData.title}</h3>
        {receipeData.instructions} 
    </div> { Rec }</div>
    
    );

  }
};

const mapStateToProps = state => {
  return { Selected: state.selectedReceipe };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelection: selectedData =>
      dispatch({ type: "ReceipeSelected", payload: selectedData })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Receipe);
