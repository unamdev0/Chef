const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
  data.emailorUsername = !isEmpty(data.emailorUsername) ? data.emailorUsername : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  
  if (Validator.isEmpty(data.emailorUsername)) {
    errors.emailorUsername = "Email/Username field is required";
  } 
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};