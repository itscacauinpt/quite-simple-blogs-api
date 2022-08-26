const express = require('express');

const { verifyAuth } = require('./middleware/verifyAuth');
const { cLogin, cCreateUser, cFindAllUsers } = require('./controller/user');
const { verifyLogin, verifyUser, verifyUserEmail } = require('./middleware/verifyRequests');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, cLogin);
app.post('/user', verifyUser, verifyUserEmail, cCreateUser);

app.get('/user', verifyAuth, cFindAllUsers);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
