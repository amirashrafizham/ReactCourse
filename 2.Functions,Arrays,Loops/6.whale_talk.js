// LOOPS EXERCISE

let input = "my name is amir izham";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

// CHECKS IF ANY LETTER IS A VOWEL, IF TRUE PUSH INTO resultArray
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] == vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// LOOPS THROUGH THE ARRAY
resultArray.forEach((element) => {
  console.log(element);
});
