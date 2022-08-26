const express = require('express');

const { cLogin, cCreateUser } = require('./controller/user');
const { verifyLogin, verifyUser, verifyUserEmail } = require('./middleware/verifyRequests');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, cLogin);
app.post('/user', verifyUser, verifyUserEmail, cCreateUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
