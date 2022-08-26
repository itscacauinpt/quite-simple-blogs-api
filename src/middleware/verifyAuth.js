const { configAuthorization } = require('../utils/authorization');

async function verifyAuth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const { payload } = configAuthorization.verifyAuth(authorization);

    req.user = payload;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = {
  verifyAuth,
};
