const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const service = require('../services/user');

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

async function cLogin(req, res) {
  try {
    const user = await service.sLogin(req.body);

    console.log(user);

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const token = jwt.sign({
      data: { email: req.body.email } },
      JWT_SECRET, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  cLogin,
};
