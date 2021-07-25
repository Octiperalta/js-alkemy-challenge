const { validationResult, check } = require("express-validator");
const AppError = require("../../error/appError");
const userService = require("../../services/userService");

const customValidationResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError("Validation failed", 400, errors.errors);
  }

  next();
};

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

const signupValidations = [
  _validEmail,
  _requiredEmail,
  _uniqueEmail,
  _requiredName,
  _requiredPassword,
  customValidationResult,
];

const loginValidations = [
  _validEmail,
  _requiredEmail,
  _requiredPassword,
  customValidationResult,
];

module.exports = { signupValidations, loginValidations };
