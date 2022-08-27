const { Category } = require('../database/models');

function sCreateCategory({ name }) {
  return Category.create({ name });
}

function sFindAllCategories() {
  return Category.findAll();
}

module.exports = {
  sCreateCategory,
  sFindAllCategories,
};
