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

module.exports = {
  sCreateNewPost,
  sFindAllPosts,
  sFindPostById,
};
// {
//   "id": 3,
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "userId": 1,
//   "updated": "2022-05-18T18:00:01.196Z",
//   "published": "2022-05-18T18:00:01.196Z"
// }