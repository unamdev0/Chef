const axios = require("axios");

exports.ingredients = async (req, res) => {
  var ing = req.body.ingredients;
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
      ingredients: ing,
      apiKey: process.env.API_KEY
    }
  })
    .then(async response => {
      const recepies = await response.data.map(async recepie => {
        var k = await axios({
          method: "GET",
          url:
            "https://api.spoonacular.com/recipes/" +
            recepie.id +
            "/information",
          headers: {
            "content-type": "application/json"
          },
          params: {
            apiKey: process.env.API_KEY
          }
        }).then(async instructions => {
          recepie["instructions"] = await instructions.data.instructions;
          return recepie;
        });
        return k;
      });
      Promise.all(recepies).then(() => {
        res.send(response.data);
      });
    })
    .catch(error => {
      console.log(error);
    });
};

exports.receipe = async (req, res) => {
  const { receipe } = req.body;
  axios({
    method: "GET",
    url: "https://api.spoonacular.com/recipes/search",
    headers: {
      "content-type": "application/json"
    },
    params: {
      apiKey: process.env.API_KEY,
      query: receipe,
      number: 5
    }
  })
    .then(async response => {
      const recepies = await response.data.results.map(async recepie => {
        var k = await axios({
          method: "GET",
          url:
            "https://api.spoonacular.com/recipes/" +
            recepie.id +
            "/information",
          headers: {
            "content-type": "application/json"
          },
          params: {
            apiKey: process.env.API_KEY
          }
        }).then(async instructions => {
          recepie["instructions"] = await instructions.data.instructions;
          return recepie;
        });
        return k;
      });
      Promise.all(recepies).then(() => {
        res.send(response.data);
      });
    })
    .catch(error => {
      console.log(error);
    });
};
