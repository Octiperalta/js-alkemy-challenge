const { poolConnection } = require("../loaders/mysql");
const mysql = require("mysql2");

class OperationRepository {
  constructor() {}

  async findOperations(id, queryParams) {
    const { limit, order = "" } = queryParams;
    const selectQuery = `SELECT * FROM user u INNER JOIN operation o ON u.user_id = o.user_id WHERE u.user_id = ? ORDER BY create_time ${
      order.toLowerCase() === "desc" ? "DESC" : ""
    } ${limit ? "LIMIT " + limit : ""}`;

    //! RECORDAR CAMBIAR POR ID CORRESPONDIENTE
    const query = mysql.format(selectQuery, 1);
    const [rows] = await poolConnection.query(query);

    return rows;
  }
}

module.exports = OperationRepository;