var express = require('express');
var router = express.Router();
const api = require('../apis/index')


router.get('/ingredients',api.ingredients)

router.get('/receipe')
module.exports = router;
