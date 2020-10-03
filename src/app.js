const express = require('express');
// const sayHello = require('./strings')

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200);
  res.send({ result: 'Hello, world!' });
});

module.exports = app;
