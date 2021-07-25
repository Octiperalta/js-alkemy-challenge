const loggerInstance = require("../loaders/logger");
const userRepository = require("../repositories/userRepository");
const repository = new userRepository();

const save = async user => {
  return await repository.save(user);
};

const findByEmail = async email => {
  return await repository.findByEmail(email);
};

module.exports = { save, findByEmail };
