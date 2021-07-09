const db = require('../../db');

module.exports = {
  newUser(userData, callback) {
    const queryString = 'INSERT INTO user (password_user, name_user, last_name, address_user, email, fk_user_type_id, banned, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.connection.query(queryString, userData, (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
