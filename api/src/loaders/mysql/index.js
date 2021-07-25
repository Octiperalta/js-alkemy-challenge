const mysql = require("mysql2/promise");
const { database } = require("../../config");

const poolConnection = mysql.createPool({
  connectionLimit: 100,
  host: database.host,
  user: database.username,
  password: database.password,
  database: database.name,
  debug: false,
});

const mysqlConnect = async () => {
  try {
    await connection.connect();
    // console.log("Connected to MySQL successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { poolConnection, mysqlConnect };
