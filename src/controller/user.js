const { sLogin, sCreateUser, sFindAllUsers, sFindById, sDeleteUser } = require('../services/user');
const { configAuthorization } = require('../utils/authorization');
// const { User } = require('../database/models');

async function cLogin(req, res) {
  try {
    const user = await sLogin(req.body);

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const token = configAuthorization.signAuth(user);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cCreateUser(req, res) {
  try {
    const newUser = await sCreateUser(req.body);

    const token = configAuthorization.signAuth(newUser);

    return res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cFindAllUsers(_req, res) {
  try {
    const users = await sFindAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cFindById(req, res) {
  try {
    const user = await sFindById(req.params);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

async function cDeleteUser(req, res) {
  try {
    await sDeleteUser(req.user);

    return res.status(204).json({});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cLogin,
  cFindById,
  cCreateUser,
  cFindAllUsers,
  cDeleteUser,
};
