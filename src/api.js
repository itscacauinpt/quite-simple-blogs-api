const express = require('express');

const { verifyAuth } = require('./middleware/verifyAuth');

const { verifyLogin, verifyUser, verifyUserEmail } = require('./middleware/verifyRequests');

const { cLogin, cCreateUser, cFindAllUsers, cFindById } = require('./controller/user');

const { cCreateCategory } = require('./controller/category');

const { verifyCategory } = require('./middleware/verifyCategoryReq');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, cLogin);
app.post('/user', verifyUser, verifyUserEmail, cCreateUser);

app.get('/user', verifyAuth, cFindAllUsers);
app.get('/user/:id', verifyAuth, cFindById);

app.post('/categories', verifyCategory, verifyAuth, cCreateCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
