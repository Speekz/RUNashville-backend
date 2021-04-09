const db = require('../../db');

module.exports = {
  newUser(userData, callback) {
    const queryString = 'INSERT INTO user (password, name, last_name, address, email, fk_user_type_id, banned, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.connection.query(queryString, userData, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
