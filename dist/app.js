/*
  -------------------------
    F O R M   S E N D E R
  -------------------------
*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use('/', require('./routes/contact-form'));


app.listen(3000, () => console.log('Server started...'));