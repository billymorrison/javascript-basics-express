const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const round = a => Math.round(a);

const roundUp = a => Math.ceil(a);

const roundDown = a => Math.floor(a);

const absolute = a => Math.abs(a);

const quotient = (a, b) => {
  const num = a / b;
  if (num > 0) {
    return Math.floor(num);
  }
  return Math.ceil(num);
};

const remainder = (a, b) => a % b;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
