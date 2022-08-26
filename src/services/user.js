const { User } = require('../database/models/user');

function sLogin({ email, password }) {
  return User.findOne({ where: email, password });
}

module.exports = {
  sLogin,
};
