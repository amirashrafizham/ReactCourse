const fruits = ["mango", "papaya", "pineapple", "apple"];

//Using .forEach()---[returns 1 item]
fruits.forEach((item) => console.log(item));

//Using .map()---[returns 1 array after applying operation on each item]
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

const secretMessage = animals.map((x) => x[0]);
console.log(secretMessage);

//Using .filter()---[returns 1 array after applying condition on each item]
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const lessThan250 = randomNumbers.filter((x) => x < 250);
console.log(lessThan250);

//Using .findIndex()---[returns 1 item, which is the index of the item]
const rabbitIndex = animals.findIndex((x) => x == "rabbit");
console.log(rabbitIndex);

//Using .reduce()---[returns 1 item, after iterating the entire array]
const newNumbers = [1, 3, 5, 7];

const sumItems = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
console.log(sumItems);
