const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '5d', algorithm: 'HS256' };

const configAuthorization = {
  signAuth: (payload) => jwt.sign({ data: { payload } }, JWT_SECRET, jwtConfig),
  verifyAuth: (payload) => {
    try {
      return jwt.verify(payload, JWT_SECRET);
    } catch (error) {
      throw new Error('Expired or invalid token');
    }
  },
};

module.exports = {
  configAuthorization,
};
