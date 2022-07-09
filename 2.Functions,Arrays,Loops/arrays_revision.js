// Creating an array
const hobbies = ["tennis", "running", "guitar"];

// Accessing an array
const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];
let access = famousSayings[0];

// Updating array element
let groceryList = ["bread", "tomatoes", "milk"];
groceryList[0] = "avocado";
let update = groceryList[0];

// Storing array into a variable (let and const)
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

// Array length
console.log(condiments.length);

const chores = ["wash dishes", "do laundry", "take out trash"];
// Using .pop() to remove an item at the end of the array
chores.pop();

// Using .push() to add items at the end of the array
chores.push("make bed", "vacuum carpet");

// Using .shift() to remove an item at the beginning of the array
chores.shift();

// Using .unshift() to add an item at the beginning of the array
chores.unshift("wash car");

// Using .slice() to filter items in the array
console.log(chores.slice(0, 2));

// Using .indexOf() to get an item's index in the array
console.log(chores.indexOf("make bed"));

// Nested Array, experiment to access number 4
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(numberClusters[1][1]);
