const { sCreateNewPost, sFindAllPosts } = require('../services/blogPost');

async function cCreateNewPost(req, res) {
  try {
    const token = req.headers.authorization;
    const newPost = await sCreateNewPost(req.body, token);

    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cFindAllPosts(_req, res) {
  try {
    const allPosts = await sFindAllPosts();

    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cCreateNewPost,
  cFindAllPosts,
};
