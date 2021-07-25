const userService = require("./userService");

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

module.exports = { signup };
