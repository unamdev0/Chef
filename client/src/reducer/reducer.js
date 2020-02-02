const initialState={
    ingredientsCount: 1,
    ingredients: "",
    tempIngredient: ""
}


const reducer = (state = initialState, action) => {
    if (action.type === "Add_Ingredients") {
      return {
        ...state,
          ingredientsCount: this.state.ingredientsCount + 1,
          ingredients: this.state.ingredients
            ? this.state.ingredients + "," + this.state.tempIngredient
            : this.state.tempIngredient
      };
    } else if (action.type === "Temp_Ingredients") {
      return {
        ...state,
        tempIngredient: action.payload
      };
    }
    return state;
  };
  
  export default reducer;