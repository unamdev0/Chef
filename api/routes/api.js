var express = require("express");
var router = express.Router();
const api = require("../apis/index");

router.post("/ingredients", api.ingredients);

router.post("/receipe", api.receipe);
module.exports = router;
