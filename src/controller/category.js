const { sCreateCategory, sFindAllCategories } = require('../services/category');

async function cCreateCategory(req, res) {
  try {
    const category = await sCreateCategory(req.body);

    return res.status(201).json(category);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cFindAllCategories(req, res) {
  try {
    const categories = await sFindAllCategories();
    
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cCreateCategory,
  cFindAllCategories,
};
