const { poolConnection } = require("../loaders/mysql");
const mysql = require("mysql2");

class OperationRepository {
  constructor() {}

  async findOperations(id, queryParams) {
    const { limit, order, type } = queryParams;

    const selectQuery = `
      SELECT email, operation_id, description, amount, operation_type, date_format(create_time, '%b %d, %Y') as date, operation_type 
        FROM user u INNER JOIN operation o ON u.user_id = o.user_id
        WHERE u.user_id = ? ${type ? `AND operation_type = ?` : ""}
        ORDER BY create_time ${order ? order : "ASC"} ${
      limit ? "LIMIT ?" : ""
    }`;

    const array = [
      id,
      ...(type ? [type.toUpperCase()] : []),
      ...(limit ? [Number(limit)] : []),
    ];

    const query = mysql.format(selectQuery, array);
    const [rows] = await poolConnection.query(query);

    return rows;
  }

  async findById(id) {
    const selectQuery = "SELECT * FROM operation WHERE operation_id = ?";
    const query = mysql.format(selectQuery, id);

    const [rows] = await poolConnection.query(query);
    return rows[0];
  }

  async create(opearation) {
    const { description, amount, operationType, userId } = opearation;

    const insertQuery =
      "INSERT INTO operation(description, amount, operation_type, user_id) VALUES (?, ?, ?, ?)";
    const query = mysql.format(insertQuery, [
      description,
      amount,
      operationType.toUpperCase(),
      userId,
    ]);

    const [rows] = await poolConnection.query(query);
    return rows[0];
  }

  async update(operation) {
    const { description, amount, operation_id } = operation;
    const putQuery =
      "UPDATE operation SET description = ?, amount = ? WHERE operation_id = ?";

    const query = mysql.format(putQuery, [description, amount, operation_id]);
    await poolConnection.query(query);
  }

  async remove(id) {
    const deleteQuery = "DELETE FROM operation WHERE operation_id = ?";

    const query = mysql.format(deleteQuery, id);
    await poolConnection.query(query);
  }
}

module.exports = OperationRepository;
