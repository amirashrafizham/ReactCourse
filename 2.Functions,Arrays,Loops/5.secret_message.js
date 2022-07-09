//ARRAY EXERCISE
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

console.log(`Orignal length: ${secretMessage.length}`);

// Remove last item
secretMessage.pop();

// Checking the length of the array
console.log(secretMessage.length);

// Replacing element in the array
let easilyIndex = secretMessage.indexOf("easily");
secretMessage[easilyIndex] = "right";

// Removing the first element in the array
secretMessage.shift();

// Adding an element in the beginning of the array
secretMessage.unshift("Programming");

// Removing the sentence "get right the first time" and replace with "know"
let index_get = secretMessage.indexOf("get");
let index_time = secretMessage.indexOf("time");
secretMessage.splice(index_get, index_time - index_get, "know");

// Joining all elements into 1 string sentence
let sentence = secretMessage.join(" ");
console.log(sentence);
