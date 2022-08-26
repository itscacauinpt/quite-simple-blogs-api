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

function sFindById({ id }) {
  return User.findOne({
    where: { id },
    attributes: { exclude: ['password'] } });
}

module.exports = {
  sLogin,
  sFindById,
  sCreateUser,
  sFindAllUsers,
};
