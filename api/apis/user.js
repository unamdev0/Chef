const Validator = require("validator");
const isEmpty = require("is-empty");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function validateLoginDetails(data) {
  let errors = {};
  data.emailorUsername = !isEmpty(data.emailorUsername)
    ? data.emailorUsername
    : "";
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
}

function validRegistrationDetails(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";
  data.username = !isEmpty(data.username) ? data.username : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.username)) {
    errors.name = "UserName field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

exports.validateRegistration = (req, res) => {
  console.log(req)
  try {
    const { errors, isValid } = validRegistrationDetails(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }]
    }).then(user => {
      if (user) {
        return res
          .status(400)
          .json({ email: "Email/Username is already registered" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          avatar: req.body.avatar
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.log(err);
              throw err;
            }
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.send(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  } catch (e) {
    console.log("eror",e);
  }
};

exports.validateLogin = (req, res) => {
  const { errors, isValid } = validateLoginDetails(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const emailorUsername = req.body.emailorUsername;
  const password = req.body.password;

  User.findOne({
    $or: [{ email: emailorUsername }, { username: emailorUsername }]
  }).then(user => {
    if (!user) {
      return res.status(404).json({ error: "Username/Email does not exists" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) {
        return res.status(400).send("Wrong password");
      } else {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload,
          process.env.secretOrKey,
          {
            expiresIn: 31556926
          },
          (err, token) => {
            res.json({
              success: true,
              token: token
            });
          }
        );
      }
    });
  });
};
