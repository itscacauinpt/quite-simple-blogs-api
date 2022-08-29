const { Category } = require('../database/models');

async function verifyPost(req, res, next) {
  const { title, content, categoryIds } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const findCatIds = categoryIds.map(async (catId) => Category.findByPk(catId));

  const catIds = await Promise.all(findCatIds);

  if (catIds.includes(null)) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
}

module.exports = {
  verifyPost,
};
