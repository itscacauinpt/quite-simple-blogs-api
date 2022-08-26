const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

async function verifyAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(authorization, JWT_SECRET);

    if (!payload) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = payload;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
}

module.exports = {
  verifyAuth,
};
