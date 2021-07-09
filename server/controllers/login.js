/* eslint-disable camelcase */
const SHA256 = require('crypto-js/sha256');
const moment = require('moment');
const models = require('../models');

module.exports = {
  post(req, res) {
    const { email, password: introPW } = req.body;
    models.login.getUser(email, (result) => {
      if (result.length !== 0) {
        const {
          name_user, last_name, password_user, created_at, address_user,
        } = result[0];
        const checkPassword = SHA256(introPW + name_user + last_name + address_user + email
          + moment(created_at).format('YYYY/MM/DD')).toString();
        if (checkPassword === password_user) {
          res.status(200).send('Logged In');
        } else {
          res.status(401).send('Wrong Password');
        }
      } else {
        res.status(404).send('Not Found');
      }
    });
  },
};
