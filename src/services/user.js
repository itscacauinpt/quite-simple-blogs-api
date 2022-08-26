const { User } = require('../database/models');

function sLogin({ email, password }) {
  return User.findOne({
    where: { email, password },
  });
}

function sCreateUser({ displayName, email, password, image }) {
  return User.create({ displayName, email, password, image });
}

function sFindAllUsers() {
  return User.findAll({
    attributes: { exclude: ['password'] } });
}

module.exports = {
  sLogin,
  sCreateUser,
  sFindAllUsers,
};
