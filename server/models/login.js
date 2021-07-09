const db = require('../../db');

module.exports = {
  getUser(email, callback) {
    const queryString = 'SELECT password_user, name_user, last_name, address_user, created_at FROM user WHERE email = ?';
    db.connection.query(queryString, [email], (err, result) => {
      if (err) {
        console.log(err);
      }
      callback(result);
    });
  },
};
