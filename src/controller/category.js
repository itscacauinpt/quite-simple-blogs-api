const { sCreateCategory } = require('../services/category');

async function cCreateCategory(req, res) {
  try {
    const category = await sCreateCategory(req.body);

    return res.status(201).json(category);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cCreateCategory,
};
