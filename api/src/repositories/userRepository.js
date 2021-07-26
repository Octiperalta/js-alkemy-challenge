const { poolConnection } = require("../loaders/mysql");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const util = require("util");
const loggerInstance = require("../loaders/logger");

class UserRepository {
  constructor() {}

  async save(user) {
    // password encryption
    user.password = await bcrypt.hash(user.password, 10);

    const insertQuery =
      "INSERT INTO user (email, name, password) VALUES (?, ?, ?)";
    const query = mysql.format(insertQuery, [
      user.email,
      user.name,
      user.password,
    ]);

    try {
      await poolConnection.query(query);

      // console.log(response);
    } catch (err) {
      throw Error(err);
    }
  }

  async findByEmail(email) {
    const selectQuery = "SELECT * FROM user WHERE email = ?";
    const query = mysql.format(selectQuery, email);

    const [rows] = await poolConnection.query(query);

    return rows[0];
  }

  async findById(id) {
    // console.log(id);
    const selectQuery = "SELECT * FROM user WHERE user_id = ?";
    const query = mysql.format(selectQuery, id);
    const [rows] = await poolConnection.query(query);

    return rows[0];
  }
}

module.exports = UserRepository;
