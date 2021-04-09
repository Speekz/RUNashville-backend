/* eslint-disable camelcase */
const SHA256 = require('crypto-js/sha256');
const models = require('../models');

module.exports = {
  post(req, res) {
    const {
      password, name, lastname, email, created_at, address,
    } = req.body;
    const hashedPW = SHA256(password + name + lastname + address + email
      + created_at).toString();
    models.signup.newUser([hashedPW, name, lastname, address, email, 1, false, created_at], () => {
      res.status(201).send('Created');
    });
  },
};
