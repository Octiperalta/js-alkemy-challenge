const authService = require("../services/authService");

const signup = async (req, res, next) => {
  const { email, name, password } = req.body;

  try {
    const successMessage = await authService.signup(email, name, password);
    res.status(201).json({ status: "OK", detail: successMessage });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const jwt = await authService.login(email, password);
    res.json({ status: "OK", detail: jwt });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, login };
