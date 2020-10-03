const negate = a => !a;

const both = (a, b) => a && b;

const either = (a, b) => a || b;

const none = (a, b) => !(a || b);

const one = (a, b) => (a && !b) || (!a && b);

const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => a % 2 !== 0;

const isEven = a => a % 2 === 0;

const isSquare = a => Math.sqrt(a) === Math.floor(Math.sqrt(a));

const startsWith = (char, string) => {
  for (let i = 0; i < char.length; i++) {
    if (char[i] !== string[i]) {
      return false;
    }
  }
  return true;
};

const containsVowels = string => {
  const newString = string.toLowerCase();
  const vowels = "aeiou";
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < newString.length; j++) {
      if (vowels[i] === newString[j]) {
        return true;
      }
    }
  }
  return false;
};

const isLowerCase = string => {
  const testString = string.toLowerCase();
  return testString === string;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
