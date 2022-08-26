const express = require('express');

const { cLogin } = require('./controller/user');
const { verifyLogin } = require('./middleware/veridyLogin');

const app = express();

app.use(express.json());

app.post('/login', verifyLogin, cLogin);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
