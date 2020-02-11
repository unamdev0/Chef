const initialState = {
    selectedReceipe:{
        isSelected:false,
        index:-1,
        receipeData:{}
    },
  ingredientsCount: 1,
  ingredients: "",
  tempIngredient: "",
  receipes:[
    {
        "id": 1077696,
        "title": "Polish Potato Dumplings (Kopytka)",
        "image": "https://spoonacular.com/recipeImages/1077696-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 0,
        "missedIngredients": [],
        "usedIngredients": [
            {
                "id": 11362,
                "amount": 2,
                "unit": "cups",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "potatoes",
                "original": "2 cups mashed potatoes cold",
                "originalString": "2 cups mashed potatoes cold",
                "originalName": "mashed potatoes cold",
                "metaInformation": [
                    "cold",
                    "mashed"
                ],
                "meta": [
                    "cold",
                    "mashed"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
            },
            {
                "id": 1123,
                "amount": 1,
                "unit": "large",
                "unitLong": "large",
                "unitShort": "large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 large egg",
                "originalString": "1 large egg",
                "originalName": "egg",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [],
        "likes": 1,
        "instructions": "Instructions\n\nPlace mashed potatoes in a mixing bowl. They should be cold, so this is a great way to use up leftover potatoes.\n\nAdd egg and flour and mix until the dough comes together. Place dough onto a floured surface and divide into two parts. Roll one part of the dough into a long log and slice into 1.5 to 2\" dumplings.\n\nIn a large saucepan or pot, boil water and add 1 teaspoon of salt. Add 5 to 8 dumplings at a time to the boiling water and cook until they start to float at the top. Remove and place on a plate. Repeat with remaining dumplings.\n\nYou can serve the dumplings right away as a side dish or follow the suggestion below.\n\nIn a skillet, heat up 1 tablespoon of olive oil and 1 tablespoon of butter. Add cooked dumplings and cook until golden brown. Remove onto a plate. Add 2 minced garlic cloves, 1 small yellow onion (chopped), 4 slices of bacon (chopped) and 4 white mushrooms (washed, sliced). Saute until fragrant and the bacon is crispy. Toss with dumplings and serve."
    },
    {
        "id": 1049530,
        "title": "Leftover Mashed Potatoes Gnocchi",
        "image": "https://spoonacular.com/recipeImages/1049530-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 98853,
                "amount": 4,
                "unit": "servings",
                "unitLong": "servings",
                "unitShort": "servings",
                "aisle": "Pasta and Rice;Refrigerated;Frozen",
                "name": "gnocchi",
                "original": "Don't forget to read the recipe notes before you start – they'll help you make the best gnocchi possible!",
                "originalString": "Don't forget to read the recipe notes before you start – they'll help you make the best gnocchi possible!",
                "originalName": "Don't forget to read the recipe notes before you start – they'll help you make the best gnocchi possible!",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/gnocchi-isolated.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 egg",
                "originalString": "1 egg",
                "originalName": "egg",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 11362,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "potatoes",
                "original": "1 cup leftover mashed potatoes (cold and straight out of the fridge is fine!)",
                "originalString": "1 cup leftover mashed potatoes (cold and straight out of the fridge is fine!)",
                "originalName": "leftover mashed potatoes (cold and straight out of the fridge is fine!)",
                "metaInformation": [
                    "leftover",
                    "cold",
                    "mashed",
                    "( and straight out of the fridge is fine!)"
                ],
                "meta": [
                    "leftover",
                    "cold",
                    "mashed",
                    "( and straight out of the fridge is fine!)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
            }
        ],
        "unusedIngredients": [],
        "likes": 1,
        "instructions": "Instructions\n\nAdd mashed potatoes, egg, and a pinch of salt to a large mixing bowl.\nAdd 1/4 cup of flour to the bowl and gently stir to combine. The amount of flour you need will vary based on your mashed potato recipe  I find I usually need around 1 cup to get a gnocchi consistency I like. I recommend adding flour 1/4 cup at a time until the dough feels right. You can mix the first bit of flour in with a spoon or spatula, but after that its helpful to use your hands to finish mixing. When the dough is ready, it should be soft and light, but not sticky. Avoid overworking the dough  this can cause chewy, gummy gnocchi.\nLightly flour a large cutting board and a sheet pan or large plate.\nUse a knife to divide gnocchi dough into 4 or 5 sections. Place one section of dough on the cutting board and use your hands to gently roll it into a long rope, about 1/2 thick. If the dough gets sticky as you roll it, dust it with some extra flour.\nUse a knife to cut the rope of dough into 1/2 pieces  these are your gnocchi! Transfer the cut gnocchi to your lightly floured sheet pan and repeat the rolling and cutting process with the remaining dough. If youd like, you can roll each gnocco across a gnocchi board or the tines of a fork to form ridges (see recipe notes).\nBring a large pot of water to a boil and add a generous pinch or two of salt.\nCarefully add gnocchi to boiling water give them a gentle stir. Cook for 2-3 minutes until gnocchi float to the top of the water. Drain and toss with your favorite sauce.\n\nFor the sauce: For these photos, I melted 4 Tbsp. of unsalted butter in a skillet with fresh rosemary, basil, salt, and pepper, then tossed it with the gnocchi and a splash of the gnocchis cooking liquid. The gnocchi are topped with shaved parmesan, an extra dusting of fresh ground black pepper, and fresh basil. I also love these gnocchi with tomato sauce, browned butter and sage, garlic alfredo, or my parmesan spinach gnocchi recipe!"
    },
    {
        "id": 544675,
        "title": "Potato Tots",
        "image": "https://spoonacular.com/recipeImages/544675-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 2,
        "missedIngredientCount": 1,
        "missedIngredients": [
            {
                "id": 10018079,
                "amount": 1,
                "unit": "cup",
                "unitLong": "cup",
                "unitShort": "cup",
                "aisle": "Bakery/Bread;Ethnic Foods;Oil, Vinegar, Salad Dressing;Baking",
                "name": "panko breadcrumbs",
                "original": "1 cup panko breadcrumbs (white or wheat)",
                "originalString": "1 cup panko breadcrumbs (white or wheat)",
                "originalName": "panko breadcrumbs (white or wheat)",
                "metaInformation": [
                    "white",
                    "( or wheat)"
                ],
                "meta": [
                    "white",
                    "( or wheat)"
                ],
                "extendedName": "white panko breadcrumbs",
                "image": "https://spoonacular.com/cdn/ingredients_100x100/panko.jpg"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 1,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 egg, whisked",
                "originalString": "1 egg, whisked",
                "originalName": "egg, whisked",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            },
            {
                "id": 11362,
                "amount": 1,
                "unit": "lb",
                "unitLong": "pound",
                "unitShort": "lb",
                "aisle": "Produce",
                "name": "potatoes",
                "original": "2 large potatoes (about 1 lb), cut into 2 inch cubes (they don't have to be perfect)",
                "originalString": "2 large potatoes (about 1 lb), cut into 2 inch cubes (they don't have to be perfect)",
                "originalName": "large potatoes (about , cut into 2 inch cubes (they don't have to be perfect)",
                "metaInformation": [
                    "cut into 2 inch cubes (they don't have to be perfect)"
                ],
                "meta": [
                    "cut into 2 inch cubes (they don't have to be perfect)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
            }
        ],
        "unusedIngredients": [],
        "likes": 0,
        "instructions": "1. Preheat oven to 375 degrees.2. Boil the potatoes in salted water in a pot for 12-15 minutes or until fork tender.3. Drain off all the water and cool the potatoes.4. Using the side of a box grater, grate all of the potatoes into a bowl.5. Place the flour, whisked egg and breadcrumbs in THREE separate bowls.6. Take about 1 tbsp of the potato mixture and shape into tater tots.7. Roll the tots into the flour, followed by the egg, then the panko bread crumbs, coating lightly.8. Place onto a silpat or parchment lined cookie sheet and coat evenly with cooking spray.9. Bake for 15 minutes or until golden.10. Cool and serve.To Freeze: Shape them into tots and freeze before you bake them  After freezing, just pop them in the oven from the freezer adding at least another 3-5 minutes baking time."
    },
    {
        "id": 546738,
        "title": "How to make Spinach Gnocchi",
        "image": "https://spoonacular.com/recipeImages/546738-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 10011457,
                "amount": 2,
                "unit": "cup",
                "unitLong": "cups",
                "unitShort": "cup",
                "aisle": "Produce",
                "name": "spinach",
                "original": "2 cup of spinach",
                "originalString": "2 cup of spinach",
                "originalName": "spinach",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/spinach.jpg"
            },
            {
                "id": 11353,
                "amount": 2,
                "unit": "Pound",
                "unitLong": "Pounds",
                "unitShort": "lb",
                "aisle": "Produce",
                "name": "starchy potatoes",
                "original": "2 Pound of starchy potatoes",
                "originalString": "2 Pound of starchy potatoes",
                "originalName": "starchy potatoes",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/russet-or-idaho-potatoes.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 1,
                "unit": "large",
                "unitLong": "large",
                "unitShort": "large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "egg",
                "original": "1 large egg",
                "originalString": "1 large egg",
                "originalName": "egg",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11362,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "potatoes",
                "original": "potatoes",
                "originalString": "potatoes",
                "originalName": "potatoes",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
            }
        ],
        "likes": 410,
        "instructions": "Start by filling a large pot with cold water. Take a good pinch of salt and salt the water, then cut potatoes in half and place them in the pot. (Do not peel them right now since the potatoes flavor will be much better if you leave the skin on!Bring the water to a boil and cook the potatoes until tender throughout, this takes roughly 40-50 minutes but test them every once in a while.When the potatoes are cooked, take them out one at a time and place them on a large cutting board. Make sure you peel each potato as quickly as you can, keeping in mind to be careful not to burn your fingers! You should be able to peel them easily with a knife. Reason being is that you want the potatoes to be hot when you mash them. Now if you don't have a ricer, deconstruct the potatoes with a fork on your cutting board. You want to have a fully texture so mashing them is not what you want to do. Just run the fork down the sides of the peeled potato creating a nice, fluffy potato base to work with, just like the above pictures.Let the potatoes cool spread out across the cutting board for abut 10 minutes. Long enough that the egg won't cook when it is incorporated into the potatoes. Drizzle with the beaten egg on the potatoes, as evenly as you can and sprinkle 3/4 cup of the flour across the top. Get ready to get your hands dirty! With the help of a large pastry scraper (if you don't have one, use both fo your hands) you want to incorporate the flour and eggs into the potato mixture thoroughly.  Scrape underneath and fold, scrape and fold until the mixture is a light crumble. Very gently, with a feathery touch knead the dough.  At this point, you can add the rest of your flour. .  The dough should be moist but not sticky!! If it is still ver sticky, add a tiny bit of flour at a time. It should feel almost billowy. Divide your dough into 8 pieces. Now gently roll each portion into logs like I am showing you in the above picture, about 1/2 wide. Use a knife to cut pieces every 1/2 to 3/4-inch (see above pics). Dust with a bit more flour.To shape the gnocchi hold a fork in one hand (see photo) and gently rock the fork from one side to the other.  . Set each gnocchi aside, dust with a bit more flour if needed, until you are ready to boil them. This step takes some practice, don't get discouraged, once you get the hang of it it's easy.Once you are done, fill a large pot about 2/3 full, salt your water and bring it to a boil.Now that you are on the final stretch, either reheat your potato water or start with a fresh pot (salted), and bring to a boil. Cook the gnocchi in batches by dropping them into the boiling water roughly twenty at a time. They will let you know when they are cooked because they will pop back up to the top. Fish them out of the water a few at a time with a slotted spoon ten seconds or so after they've surfaced. Have a large platter ready with a generous swirl of whatever sauce or favorite pesto you'll be serving on the gnocchi. Place the gnocchi on the platter. Continue cooking in batches until all the gnocchi are done. Gently toss with more sauce or pesto. Don't put too much sauce, the dressing should be light.You can serve it family style or in individual portions."
    },
    {
        "id": 1057044,
        "title": "Sweet Potato and Apple Dog Treats",
        "image": "https://spoonacular.com/recipeImages/1057044-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
            {
                "id": 1109003,
                "amount": 1,
                "unit": "large",
                "unitLong": "large",
                "unitShort": "large",
                "aisle": "Produce",
                "name": "gala apple",
                "original": "1 large Gala apple, grated (no core or seeds!)",
                "originalString": "1 large Gala apple, grated (no core or seeds!)",
                "originalName": "Gala apple, grated (no core or seeds!)",
                "metaInformation": [
                    "grated",
                    "(no core or seeds!)"
                ],
                "meta": [
                    "grated",
                    "(no core or seeds!)"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
            },
            {
                "id": 11507,
                "amount": 3,
                "unit": "",
                "unitLong": "",
                "unitShort": "",
                "aisle": "Produce",
                "name": "sweet potatoes",
                "original": "3 Sweet potatoes, halved lengthwise",
                "originalString": "3 Sweet potatoes, halved lengthwise",
                "originalName": "Sweet potatoes, halved lengthwise",
                "metaInformation": [
                    "halved lengthwise"
                ],
                "meta": [
                    "halved lengthwise"
                ],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/sweet-potato.png"
            }
        ],
        "usedIngredients": [
            {
                "id": 1123,
                "amount": 2,
                "unit": "large",
                "unitLong": "larges",
                "unitShort": "large",
                "aisle": "Milk, Eggs, Other Dairy",
                "name": "eggs",
                "original": "2 large Eggs",
                "originalString": "2 large Eggs",
                "originalName": "Eggs",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.png"
            }
        ],
        "unusedIngredients": [
            {
                "id": 11362,
                "amount": 1,
                "unit": "serving",
                "unitLong": "serving",
                "unitShort": "serving",
                "aisle": "Produce",
                "name": "potatoes",
                "original": "potatoes",
                "originalString": "potatoes",
                "originalName": "potatoes",
                "metaInformation": [],
                "meta": [],
                "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.png"
            }
        ],
        "likes": 1,
        "instructions": "InstructionsPreheat the oven to 400 degrees. Coat a baking sheet with cooking spray.Cut the sweet potatoes in half lengthwise and place them cut side down on the prepared baking sheet.Place into the oven and roast for 30-40 minutes, or until very tender. Remove from the oven and allow to cool.Reduce the oven to 375 degrees. Line a baking sheet with parchment paper.Scoop out the cooled insides of the sweet potatoes into a large mixing bowl; discard the skins. Add the grated apple and eggs to the bowl. Slowly add the flour, one cup at a time, mixing well between each addition.Working on a lightly floured surface, knead the dough 3-4 times until it comes together. Using a rolling pin, roll the dough to 1/4-inch thickness. Use more flour as needed.Use a cookie cutter to cut out desired shape and place onto the prepared baking sheet.Place into oven and bake until the edges are golden brown, about 20-25 minutes. Remove from the oven and allow to cool completely on a wire rack.Store in a sealed container in the refrigerator or freezer. My dog loves them right out of the freezer. Enjoy."
    }
],
  loading: false,
  token:null
};

const reducer = (state = initialState, action) => {
  if (action.type === "Add_Ingredients") {
    console.log(state);
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
      receipes: action.payload,
      loading:false
    };
  }
  else if (action.type === "ReceipeSelected") {
      var metaData= action.payload
      console.log(action.payload)
    return {
      ...state,
      selectedReceipe:metaData
    };
  } else if (action.type === "backDropClicked") {
    var metaData= action.payload
    console.log(action.payload)
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
  }
  return state;
};

export default reducer;
