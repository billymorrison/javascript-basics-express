const sayHello = string => `Hello, ${string}!`;

const uppercase = string => string.toUpperCase();

const lowercase = string => string.toLowerCase();

const countCharacters = string => string.length;

const firstCharacter = string => string[0];

const firstCharacters = (string, n) => {
  let letters = "";
  for (let i = 0; i < n; i++) {
    letters += string[i];
  }
  return letters;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
