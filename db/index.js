const mysql = require('mysql');
const { HOST, USER, PASSWORD, DB } = require('../db.config');

const connection = mysql.createConnection({
  host: HOST || 'localhost',
  user: USER || 'root',
  password: PASSWORD || '',
  database: DB || 'runashville',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

module.exports = { connection };
