const express = require('express');

const controller = require('./controller/user');
const middLogin = require('./middleware/veridyLogin');

const app = express();

app.use(express.json());

app.post('/login', middLogin.verifyLogin, controller.cLogin);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
