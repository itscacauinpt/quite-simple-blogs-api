const {
  sCreateNewPost, sFindAllPosts,
  sFindPostById, sUpdatePost } = require('../services/blogPost');

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

async function cFindPostById(req, res) {
  try {
    const post = await sFindPostById(req.params);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cUpdatePost(req, res) {
  try {
    const updated = await sUpdatePost(req.params, req.body);

    return res.status(200).json(updated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cCreateNewPost,
  cFindAllPosts,
  cFindPostById,
  cUpdatePost,
};
