const axios = require("axios");

exports.ingredients = async (req, res) => {
  var ingredients = req.body;
  ingredients = String(ingredients).replace(",", "%2C");
  axios({
    method: "GET",
    url: "https://api.spoonacular.com/recipes/findByIngredients",
    headers: {
      "content-type": "application/json"
    },
    params: {
      number: "5",
      ranking: "2",
      ignorePantry: "true",
      ingredients: ingredients,
      apiKey: process.env.API_KEY
    }
  })
    .then(resp => {
      res.send(resp.data);
    })
    .catch((error)=>{
        console.log(error)
      })
};
