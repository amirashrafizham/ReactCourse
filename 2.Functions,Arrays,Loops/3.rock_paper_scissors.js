const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      console.log("error! not wrong choice");
      break;
  }
};

const getComputerChoice = function () {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = function (getUserChoice, getComputerChoice) {
  if (getUserChoice == "rock") {
    switch (getComputerChoice) {
      case "rock":
        return `draw. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "paper":
        return `lose. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "scissors":
        return `win. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
    }
  } else if (getUserChoice == "paper") {
    switch (getComputerChoice) {
      case "rock":
        return `win. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "paper":
        return `draw. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "scissors":
        return `lose. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
    }
  } else {
    switch (getComputerChoice) {
      case "rock":
        return `lose. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "paper":
        return `win. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
      case "scissors":
        return `draw. user:${getUserChoice} comp:${getComputerChoice}`;
        break;
    }
  }
};

userChoice = getUserChoice("scissors");
computerChoice = getComputerChoice();

console.log(determineWinner(userChoice, computerChoice));
