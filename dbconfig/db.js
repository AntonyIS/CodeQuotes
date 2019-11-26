const mysql = require('mysql');


const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NodeDB",
});

module.exports = conn;
