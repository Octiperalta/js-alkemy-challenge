const AppError = require("../error/appError");
const userService = require("./userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../config");

const signup = async (email, name, password) => {
  const user = { email, name, password };

  try {
    await userService.save(user);

    // if everything ok, returns a success message
    return "User signed up successfully!";
  } catch (err) {
    throw err;
  }
};

const login = async (email, password) => {
  try {
    // 1) Verify that the email is in the database
    // 2) Verify that passwords match

    const user = await userService.findByEmail(email);
    const userPassword = user ? user.password : "";

    const validPassword = await bcrypt.compare(password, userPassword);

    if (!user || !validPassword) {
      throw new AppError(
        "Authentication error. The email and password provided are invalid",
        401
      );
    }

    // 3) A token(jwt) is generated from the user id
    const token = _encrypt(user.id);

    // 4) Return jwt with additional information
    return {
      token,
      id: user.user_id,
      email: user.email,
    };
  } catch (err) {
    throw err;
  }
};

const _encrypt = id => {
  return jwt.sign({ id }, auth.secret, { expiresIn: auth.ttl });
};

module.exports = { signup, login };
