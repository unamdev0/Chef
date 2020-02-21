const express = require("express");
const router = express.Router();
const user = require("../apis/user");

router.post("/register", user.validateRegistration);

router.post("/login", user.validateLogin);

router.post('/newReceipe',user.newReceipe)

module.exports = router;
