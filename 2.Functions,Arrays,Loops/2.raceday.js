// JAVASCRIPT CONDITIONALS EXERCISE

let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;

let runnersAge = 18;

if (runnersAge > 18 && registerEarly) {
  raceNumber += 1000;
  console.log(`Race will start at 9.30am. Your race number is ${raceNumber}`);
} else if (runnersAge > 18 && !registerEarly) {
  console.log(`Race will start at 11:00am. Your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`Youth registrants run at 12:30pm`);
} else {
  console.log(`See the registration desk`);
}
