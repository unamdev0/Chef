const initialState = {
    selectedReceipe:{
        isSelected:false,
        index:-1,
        receipeData:{}
    },
  ingredientsCount: 1,
  ingredients: "",
  tempIngredient: "",
  ingredientSearch:[],
  receipeSearch:{},
  loading: false,
  token:null,
  newReceipe:{
      ingredients:"",
      tempIngredient:"",
      ingredientsCount:1,
      instructions:[]
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === "Add_Ingredients") {
    return {
      ingredientsCount: state.ingredientsCount + 1,
      ingredients: state.ingredients
        ? state.ingredients + "," + state.tempIngredient
        : state.tempIngredient,
      tempIngredient: ""
    };
  } else if (action.type === "Temp_Ingredients") {
    return {
      ...state,
      tempIngredient: action.payload
    };
  } else if (action.type === "Receipe_data") {
    return {
      ...state,
      ingredientSearch: action.payload,
      receipeSearch:[],
      loading:false
    };
  }else if (action.type === "ReceipeSearch") {
    console.log(state)
    return {
      ...state,
      ingredientSearch: [],
      receipeSearch:action.payload,
      loading:false
    };
  }
  else if (action.type === "ReceipeSelected") {
      var metaData= action.payload
    return {
      ...state,
      selectedReceipe:metaData
    };
  } else if (action.type === "backDropClicked") {

    var metaData= action.payload
  return {
    ...state,
    selectedReceipe:metaData
  };
}else if (action.type === "isAuthenticated") {
  return {
    ...state,
    token:action.payload
  };
}else if (action.type === "isLoading") {
    return {
      ...state,
      loading:action.payload
    };
  }else if (action.type === "newReceipeIngredient") {
      var newReceipeData={}
    return {
      ...state,
      loading:action.payload
    };
  }
  return state;
};

export default reducer;
