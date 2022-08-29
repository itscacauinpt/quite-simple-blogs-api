const { User } = require('../database/models');

async function verifyLogin(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
}

async function verifyUserEmail(req, res, next) {
  const { email } = req.body;
  const verifiedEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);

  const user = await User.findOne({ where: { email } });

  if (user) return res.status(409).json({ message: 'User already registered' });

  if (!verifiedEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
}

async function verifyUser(req, res, next) {
  const { displayName, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
}

// async function verifyIfUserExits(req, res, next) {
//   const user = await User.findByPk(req.params.id);

//   if (!user) res.status(404).json({ message: 'User does not exist' });

//   next();
// }

module.exports = {
  verifyUser,
  verifyLogin,
  verifyUserEmail,
  // verifyIfUserExits,
};
