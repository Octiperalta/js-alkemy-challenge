const loggerInstance = require("../loaders/logger");
const userRepository = require("../repositories/userRepository");
const repository = new userRepository();

const save = async user => {
  return await repository.save(user);
};

const findByEmail = async email => {
  return await repository.findByEmail(email);
};

const findById = async id => {
  // console.log(id);
  return await repository.findById(id);
};

module.exports = { save, findByEmail, findById };
