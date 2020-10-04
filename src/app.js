const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200);
  res.send({ result: `${sayHello(req.params.string)}` });
});
app.get('/strings/upper/:string', (req, res) => {
  res.status(200);
  res.send({ result: `${uppercase(req.params.string)}` });
});
app.get('/strings/lower/:string', (req, res) => {
  res.status(200);
  res.send({ result: `${lowercase(req.params.string)}` });
});
app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200);
  res.send({ result: `${firstCharacters(req.params.string, req.query.length)}` });
});

module.exports = app;
