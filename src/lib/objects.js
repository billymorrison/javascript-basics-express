const createPerson = (name, age) => {
  return {name: name, age: age};
}

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => Boolean(object[property]);

const isOver65 = person => person.age > 65;

const getAges = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  const hondaCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === "Honda") {
      hondaCars.push(cars[i]);
    }
  }
  return hondaCars;
};

const averageAge = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  const averageAge = 
    ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    ages.length;
  return averageAge;
};

function createTalkingPerson(name, age) {
  return {
    name: name,
    age: age,
    introduce: function(inputName) {
      return `Hi ${inputName}, my name is ${this.name} and I am ${this.age}!` 
    }
  }
}

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
