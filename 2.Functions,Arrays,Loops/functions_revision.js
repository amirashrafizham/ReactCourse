// FUNCTIONS REVISION

// arrow functions example
const sum = (num1, num2) => {
  return num1 + num2;
};

// named functions example
function sum_normal(num1, num2) {
  return num1 + num2;
}

// anonymous functions example
const sum_anonymous = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 5));
console.log(sum_normal(3, 5));
console.log(sum_anonymous(3, 5));
