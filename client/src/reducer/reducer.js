const initialState = {
  selectedReceipe: {
    isSelected: false,
    index: -1,
    receipeData: {}
  },
  userInfo:{
    userName:null,
    email:null,
    followers:null,
    receipes:[],
    following:null
  },
  ingredientsCount: 1,
  ingredients: "",
  tempIngredient: "",
  ingredientSearch: null,
  receipeSearch:null,
  loading: false,
  token: null,
  newReceipe: {
    ingredients: [],
    tempIngredient: "",
    ingredientsCount: 1,
    instructionsCount:1,
    instructions: [],
    tempInstruction:"",
    title:null,
    imageUrl:null
  }
};

const reducer = (state = initialState, action) => {
  if (action.type === "Add_Ingredients") {
    return {
      ...state,
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
      receipeSearch: null,
      loading: false
    };
  } else if (action.type === "ReceipeSearch") {
    return {
      ...state,
      ingredientSearch: null,
      receipeSearch: action.payload,
      loading: false
    };
  } else if (action.type === "ReceipeSelected") {
    var metaData = action.payload;
    return {
      ...state,
      selectedReceipe: metaData
    };
  } else if (action.type === "backDropClicked") {
    var metaData = action.payload;
    return {
      ...state,
      selectedReceipe: metaData
    };
  } else if (action.type === "isAuthenticated") {
    return {
      ...state,
      token: action.payload
    };
  } else if (action.type === "isLoading") {
    return {
      ...state,
      loading: action.payload
    };
  } else if (action.type === "newReceipeIngredient") {
    var newReceipeData={
      ingredientsCount: state.newReceipe.ingredientsCount + 1,
      ingredients: state.newReceipe.ingredients.concat(state.newReceipe.tempIngredient),
      tempIngredient: null,
      tempInstruction:state.newReceipe.tempInstruction,
      instructions:state.newReceipe.instructions,
      title:state.newReceipe.title,
      instructionsCount:state.newReceipe.instructionsCount,
      imageUrl:state.newReceipe.imageUrl
    }
    console.log(newReceipeData)
    return {
      ...state,
     newReceipe:newReceipeData
    };
  }else if (action.type === "newReceipeInstruction") {
    var newReceipeData={
      instructionsCount: state.newReceipe.instructionsCount + 1,
      instructions: state.newReceipe.instructions.concat(state.newReceipe.tempInstruction),
      tempIngredient: state.newReceipe.tempIngredient,
      tempInstruction:null,
      ingredients:state.newReceipe.ingredients,
      title:state.newReceipe.title,
      ingredientsCount:state.newReceipe.ingredientsCount,
      imageUrl:state.newReceipe.imageUrl
    }
    return {
      ...state,
     newReceipe:newReceipeData
    };
  }else if(action.type==="ChangeTemp"){
    if(action.payload.category==="instruction"){
      var newReceipeData=state.newReceipe
      newReceipeData.tempInstruction=action.payload.value
      return {
        ...state,
       newReceipe:newReceipeData
      };
    }else{
      var newReceipeData=state.newReceipe
      newReceipeData.tempIngredient=action.payload.value
      return {
        ...state,
       newReceipe:newReceipeData
      };
    }
  }else if(action.type==="Logout"){
    return{
      ...state,
      token:null
    }
  }

  return state;
};

export default reducer;
