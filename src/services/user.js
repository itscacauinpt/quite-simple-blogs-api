const { User } = require('../database/models');

async function sLogin({ email, password }) {
  return User.findOne({
    where: { email, password },
  });
}

module.exports = {
  sLogin,
};
