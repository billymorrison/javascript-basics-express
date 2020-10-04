const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacters } = require('./lib/strings');
const { add, subtract, divide, multiply, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

function checkNumbersFromParameters(req, res) {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
}

function checkOneNumberFromParameters(req, res) {
  const num = Number(req.params.num);

  if (Number.isNaN(num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
}

function checkNumbersFromBody(req, res) {
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
}

function checkForTwoNumbers(req, res) {
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
}

function checkForZero(res, num) {
  if (num === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
}

// Strings

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: `${sayHello(req.params.string)}` });
});
app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: `${uppercase(req.params.string)}` });
});
app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: `${lowercase(req.params.string)}` });
});
app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: `${firstCharacters(req.params.string, req.query.length)}` });
});

// Numbers

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  checkNumbersFromParameters(req, res);
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.status(200).json({ result: add(num1, num2) });
});

app.get('/numbers/subtract/:num2/from/:num1', (req, res) => {
  checkNumbersFromParameters(req, res);
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  res.status(200).json({ result: subtract(num1, num2) });
});

app.post('/numbers/multiply', (req, res) => {
  checkForTwoNumbers(req, res);
  checkNumbersFromBody(req, res);
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);

  res.status(200).json({ result: multiply(num1, num2) });
});

app.post('/numbers/divide', (req, res) => {
  checkForTwoNumbers(req, res);
  checkNumbersFromBody(req, res);
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);
  checkForZero(res, num2);

  res.status(200).json({ result: divide(num1, num2) });
});

app.post('/numbers/remainder', (req, res) => {
  checkForTwoNumbers(req, res);
  checkNumbersFromBody(req, res);
  const num1 = Number(req.body.a);
  const num2 = Number(req.body.b);
  checkForZero(res, num2);

  res.status(200).json({ result: remainder(num1, num2) });
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});
app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});
app.get('/booleans/is-odd/:num', (req, res) => {
  checkOneNumberFromParameters(req, res);
  res.status(200).json({ result: isOdd(req.params.num) });
});
app.get('/booleans/:word/starts-with/:char', (req, res) => {
  const { char, word } = req.params;

  if (char.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(char, word) });
});

module.exports = app;
