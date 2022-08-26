const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = { expiresIn: '5d', algorithm: 'HS256' };

const configAuthorization = {
  signAuth: (payload) => jwt.sign({ data: { payload } }, JWT_SECRET, jwtConfig),
  verifyAuth: (payload) => jwt.verify(payload, JWT_SECRET),
};

module.exports = {
  configAuthorization,
};
