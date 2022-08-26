const { sLogin, sCreateUser, sFindAllUsers } = require('../services/user');
const { configAuthorization } = require('../utils/authorization');

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

module.exports = {
  cLogin,
  cCreateUser,
  cFindAllUsers,
};
