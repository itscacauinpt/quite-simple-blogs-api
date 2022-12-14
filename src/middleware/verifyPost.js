const { Category, BlogPost } = require('../database/models');

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

async function verifyUpdate(req, res, next) {
  const userId = req.user;
  const { id } = req.params;

  const { title, content } = req.body;

  const { dataValues } = await BlogPost.findByPk(id);

  if (dataValues.userId !== userId.id) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }

  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  next();
}

async function verifyDeleted(req, res, next) {
  const userId = req.user;
  const { id } = req.params;

  const { dataValues } = await BlogPost.findByPk(id);

  if (dataValues.userId !== userId.id) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }

  next();
}

module.exports = {
  verifyPost,
  verifyUpdate,
  verifyDeleted,
};
