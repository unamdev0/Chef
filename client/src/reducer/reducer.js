const initialState = {
  selectedReceipe: {
    isSelected: false,
    index: -1,
    receipeData: {}
  },
  ingredientsCount: 1,
  ingredients: "",
  tempIngredient: "",
  ingredientSearch: null,
  receipeSearch: {
    results: [
      {
        id: 492560,
        title: "Quick and Easy St. Louis-Style Pizza",
        readyInMinutes: 27,
        servings: 8,
        image: "St--Louis-Style-Pizza-492560.jpg",
        imageUrls: ["St--Louis-Style-Pizza-492560.jpg"],
        instructions:
          'Preheat oven to 425°F and lightly grease two 12" round pizza pans, or a couple of large baking sheets.\nMix the flour, oil, and water together - the mixture will be shaggy. Use your hands to gather it together and form into a ball. Divide it in two and form each half into a disk the rounder the better.\nCover with saran wrap and allow to rest 10 minutes to make for easier rolling - skip this step if you\'re in a hurry.\nGrease a piece of parchment or wax paper about 12" square and set a circle of dough in the middle. Cover with another lightly greased piece. Use a rolling pin to roll the dough very thin - ⅛ inch or less.\nPlace the dough on the prepared pans. Top each pizza with ⅓ cup of the sauce.\nMix the cheeses together and sprinkle ½ over top of each then season with Italian herbs or pizza seasoning.\nBake the pizzas for 9 to 12 minutes or until the cheese is melted with a few golden brown spots and the edges/bottom of the crust are golden brown.\nRemove the pizzas from the oven and let set 5 minutes. Transfer to a cutting board, cut into squares and serve immediately.'
      },
      {
        id: 559251,
        title: "Breakfast Pizza",
        readyInMinutes: 25,
        servings: 6,
        image: "Breakfast-Pizza-559251.jpg",
        imageUrls: ["Breakfast-Pizza-559251.jpg"],
        instructions:
          "<ul><li>Preheat oven to 500 F degrees.</li><li>Spray a baking sheet (15.25 x 10.25 inches) with cooking spray.</li><li>Roll out the pizza dough and place it on the pizza baking dish. Drizzle the dough with a bit of olive oil.</li><li>Arrange the mozzarella cheese evenly over the dough. Sprinkle with Parmesan cheese.</li><li>Top with bacon and tomato. Crack 6 eggs on the pizza.</li><li>Bake for 10 to 15 minutes or until the edge is golden brown.</li><li>Garnish with chives and parsley.</li></ul>"
      },
      {
        id: 630293,
        title: "Egg & rocket pizzas",
        readyInMinutes: 30,
        servings: 2,
        image: "Egg---rocket-pizzas-630293.jpg",
        imageUrls: ["Egg---rocket-pizzas-630293.jpg"],
        instructions:
          "Heat oven to 200C/180C fan/gas 6. Lay the tortillas on two baking sheets, brush sparingly with the oil then bake for 3 mins. Meanwhile chop the pepper and tomatoes and mix with the tomato pure, seasoning and herbs. Turn the tortillas over and spread with the tomato mixture, leaving the centre free from any large pieces of pepper or tomato.\nBreak an egg into the centre then return to the oven for 10 mins or until the egg is just set and the tortilla is crispy round the edges. Serve scattered with the rocket and onion."
      },
      {
        id: 601651,
        title: "Fruit Pizza",
        readyInMinutes: 90,
        servings: 8,
        image: "Fruit-Pizza-601651.jpg",
        imageUrls: ["Fruit-Pizza-601651.jpg"],
        instructions:
          "Instructions\n\nMake the Crust: Mix the butter, sugar, egg, and vanilla until well combined. (You can use an electric mixer or just mix with a spoon if your butter is melted.) Add flour, baking powder, and salt. Mix until combined. Chill the dough for 30 minutes.\n\nBake the Crust: Preheat the oven to 350 degrees. Grease a 14-inch pizza pan or round baking stone, or line with parchment. Roll the chilled dough out onto it, leaving some space around the edge. Bake for 12 minutes. Allow it to cool.\n\nMake the Cream Cheese Frosting: Using an electric mixer, combine the cream cheese, butter, powdered sugar and vanilla until smooth and creamy. Spread over the cooled cookie crust and chill again to firm up the frosting.\n\nMake It Fancy: Top with fruit! See post for designs."
      },
      {
        id: 496972,
        title: "Ricotta Pizza with Prosciutto and Fresh Pea Salad",
        readyInMinutes: 30,
        servings: 6,
        image: "Ricotta-Pizza-with-Prosciutto-and-Fresh-Pea-Salad-496972.jpg",
        imageUrls: [
          "Ricotta-Pizza-with-Prosciutto-and-Fresh-Pea-Salad-496972.jpg"
        ],
        instructions:
          "Instructions\n\nBring a small saucepan of water to a rolling boil. Drop in the fresh English peas, cook for 90 seconds, and strain. In a medium bowl, combine the fresh English peas with the red onion, and toss in the olive oil and white balsamic vinegar. Season to taste with salt and pepper. Set aside to cool in the refrigerator.\n\nPlace a pizza stone in the lowest rack of the oven and preheat the oven to 450F. If using a wood-fired pizza oven, preheat the oven following the manufacturer's instructions.\n\nOn a floured surface, roll out the pizza dough to about 12 inches in diameter. Transfer to a pizza paddle dusted with cornmeal (or a baking sheet lightly greased with olive oil). Press dimples into the dough, as well as a ridge around the perimeter to prevent the cheeses from oozing. Brush the dough lightly with olive oil. In a bowl, mix the ricotta and feta cheeses, and season to taste with salt and pepper. Spread the ricotta mixture over the dough and scatter the prosciutto.\n\nTo bake in oven: Bake for 15-17 minutes, or until the pizza crust is golden.\n\nTo bake in wood-fired pizza oven: Bake for about 30-40 seconds, rotate. Bake for an additional 30-40 seconds, until the crust is evenly cooked.\n\nToss the remaining feta cheese in the pea salad. Top the pizza with the salad and the fresh basil. Slice and serve immediately."
      }
    ],
    baseUri: "https://spoonacular.com/recipeImages/",
    offset: 0,
    number: 5,
    totalResults: 150,
    processingTimeMs: 276,
    expires: 1582220274022,
    isStale: false
  },
  loading: false,
  token: null,
  newReceipe: {
    ingredients: "",
    tempIngredient: "",
    ingredientsCount: 1,
    instructions: []
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
    var newReceipeData = {};
    return {
      ...state,
      loading: action.payload
    };
  }
  return state;
};

export default reducer;
