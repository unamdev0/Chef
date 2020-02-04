import React from "react";
import "./receipe.css";

const Receipe = props => {
  const receipeData = props.receipeData;
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

  let ingredients = () => {
    return receipeData.usedIngredients.map(ingredient => {
      return <li>{ingredient.originalString}</li>;
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

  return (
    <div className="main_wrapper">
      <h2>{receipeData.title}</h2>
      <img src={receipeData.image} />
      <div>
        Ingredients:<ul>{ingredients()}</ul>
      </div>
        {MissingIngredients()}
        <div>Instructions:
      <ul>{points()}</ul></div>
    </div>
  );
};
export default Receipe;
