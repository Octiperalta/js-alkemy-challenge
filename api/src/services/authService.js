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
    const token = _encrypt(user.user_id);

    // 4) Return jwt with additional information
    return {
      token,
      id: user.user_id,
      name: user.name,
      email: user.email,
    };
  } catch (err) {
    throw err;
  }
};

// Encyption function
const _encrypt = id => {
  return jwt.sign({ id }, auth.secret, { expiresIn: auth.ttl });
};

// JWT validator function
const validateToken = async token => {
  let id; // Variable that will be used to store the information of the user asociated with the token
  try {
    // 1) Verify that something is coming as parameter
    if (!token) {
      throw new AppError("Authentication error. Token is missing", 401);
    }

    // 2) Verify that the token is a valid jwt
    try {
      const valid = jwt.verify(token, auth.secret);
      id = valid.id;
    } catch (err) {
      throw new AppError("Authentication error. Invalid token", 401);
    }

    // 3) Verify that the user is in the database
    const user = await userService.findById(id);
    if (!user) throw new AppError("Authentication error. Invalid token", 401);

    // If everything is OK, the user is returned
    return { id: user.user_id, name: user.name };
  } catch (err) {
    throw err;
  }
};

module.exports = { signup, login, validateToken };
