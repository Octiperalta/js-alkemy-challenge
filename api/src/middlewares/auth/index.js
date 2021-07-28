const { check } = require("express-validator");
const AppError = require("../../error/appError");
const userService = require("../../services/userService");
const authService = require("../../services/authService");
const { customValidationResult: validationResult } = require("../commons");
const loggerInstance = require("../../loaders/logger");

// [VALIDATIONS]
const _validEmail = check("email", "Email is invalid").isEmail();
const _requiredEmail = check("email", "Email field is required").notEmpty();
const _uniqueEmail = check("email").custom(async email => {
  const user = await userService.findByEmail(email);

  if (user) {
    throw new AppError(
      "Email is already used. Please try with a different email address.",
      400
    );
  }
});
const _requiredName = check("name", "Name field is required").notEmpty();
const _requiredPassword = check(
  "password",
  "Password field is required"
).notEmpty();

const validJWT = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const user = await authService.validateToken(token);

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const logger = async (req, res, next) => {
  loggerInstance.info(req.body);
  next();
};

const signupValidations = [
  _validEmail,
  _requiredEmail,
  _uniqueEmail,
  _requiredName,
  _requiredPassword,
  validationResult,
];

const loginValidations = [
  _validEmail,
  _requiredEmail,
  _requiredPassword,
  validationResult,
];

module.exports = { signupValidations, loginValidations, validJWT };
