const { Category } = require('../database/models');

function sCreateCategory({ name }) {
  return Category.create({ name });
}

module.exports = {
  sCreateCategory,
};
