const { Op } = require('sequelize');
const { BlogPost, User, PostCategory, Category } = require('../database/models');
const { configAuthorization } = require('../utils/authorization');

async function sCreateNewPost({ title, content, categoryIds }, token) {
  const { data: { payload } } = configAuthorization.verifyAuth(token);

  const { id } = await User.findOne({ where: { email: payload.email } });

  const date = new Date();

  const { dataValues } = await BlogPost.create(
    { title, content, userId: id, updated: date, published: date },
  );

  const categories = categoryIds.map((catId) => ({
    postId: dataValues.id,
    categoryId: catId,
  }));

  await PostCategory.bulkCreate(categories);

  return dataValues;
}

async function sFindAllPosts() {
  return BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
}

async function sFindPostById({ id }) {
  return BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
}

async function sUpdatePost({ id }, { title, content }) {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updated = await sFindPostById({ id });

  return updated;
}

async function sDeletePost({ id }) {
  return BlogPost.destroy({
    where: { id },
  });
}

async function sSeachPost({ q }) {
  return BlogPost.findAll({ 
    where: {
      [Op.or]: [
        {
          title: { [Op.like]: `%${q}%` },
        },
        {
          content: { [Op.like]: `%${q}%` },
        },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' }],
  });
}

module.exports = {
  sCreateNewPost,
  sFindAllPosts,
  sFindPostById,
  sUpdatePost,
  sDeletePost,
  sSeachPost,
};
