//An example of a long function name
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

//Functions can be treated as a data type. This is because functions are first-class objects
const busy = checkThatTwoPlusTwoEqualsFourAMillionTimes;

//To run the function
busy();

//A higher-order function is a function that either accepts functions as parameters, returns a function, or both.
const addTwo = (num) => {
  return num + 2;
};

//A higher order function example
const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func;
  if (checkA == checkB) {
    return checkB;
  } else {
    return "inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo(2), 2));
