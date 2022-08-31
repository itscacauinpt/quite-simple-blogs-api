const express = require('express');

const { verifyAuth } = require('./middleware/verifyAuth');

const { verifyLogin, verifyUser, verifyUserEmail,
  verifyIfUserExits } = require('./middleware/verifyRequests');

const { cLogin, cCreateUser, cFindAllUsers, cFindById, cDeleteUser } = require('./controller/user');

const { cCreateCategory, cFindAllCategories } = require('./controller/category');

const { verifyCategory } = require('./middleware/verifyCategoryReq');

const {
  cCreateNewPost, cFindAllPosts, cFindPostById,
  cUpdatePost, cDeletePost, cSeachPost } = require('./controller/blogPost');

const { verifyPost, verifyUpdate, verifyDeleted } = require('./middleware/verifyPost');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, cLogin);
app.post('/user', verifyUser, verifyUserEmail, cCreateUser);

app.get('/user', verifyAuth, cFindAllUsers);
app.get('/user/:id', verifyIfUserExits, verifyAuth, cFindById);// req06
app.delete('/user/me', verifyIfUserExits, verifyAuth, cDeleteUser);// req17

app.post('/categories', verifyCategory, verifyAuth, cCreateCategory);
app.get('/categories', verifyAuth, cFindAllCategories);

app.post('/post', verifyAuth, verifyPost, cCreateNewPost);
app.get('/post', verifyAuth, cFindAllPosts);
app.get('/post/:id', verifyAuth, cFindPostById);
app.put('/post/:id', verifyAuth, verifyUpdate, cUpdatePost);
app.delete('/post/:id', verifyAuth, verifyDeleted, cDeletePost);// req16
app.get('/search', verifyAuth, cSeachPost);// not finished

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
