const getNthElement = (index, array) => {
  if (index > array.length - 1) {
    return array[index - array.length];
  }
  return array[index];
}

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) => {
  array[array.length] = element;
}

const addToArray2 = (element, array) => {
  const newArray = [...array, element];
  return newArray;
};

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(n => n.toString());

const uppercaseWordsInArray = strings => strings.map(w => w.toUpperCase());

const reverseWordsInArray = strings => {
  const newStrings = strings.map(word => {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      newWord += word[i];
    }
    return newWord;
  });
  return newStrings;
};

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) => {
  const newArray = array.map(ele => ele);
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const newArray = strings.filter(word => {
    const newString = word.toLowerCase();
    const vowels = "aeiou";
    for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === newString[0]) {
        return true;
      }
    }
  });
  return newArray;
};

const removeSpaces = string => string.replace(/\s+/g, '');

const sumNumbers = numbers => {
  function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  return numbers.reduce(reducer);
};

const sortByLastLetter = strings => {
  let reverse = reverseWordsInArray(strings);
  reverse.sort();
  reverse = reverseWordsInArray(reverse);
  return reverse;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
