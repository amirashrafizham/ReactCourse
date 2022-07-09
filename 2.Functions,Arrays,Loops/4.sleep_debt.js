//JAVASCRIPT FUNCTIONS EXERCISE

function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "error";
      break;
  }
}

const getActualSleepHours = () => {
  let total = 0;
  total += getSleepHours("monday");
  total += getSleepHours("tuesday");
  total += getSleepHours("wednesday");
  total += getSleepHours("thursday");
  total += getSleepHours("friday");
  total += getSleepHours("saturday");
  total += getSleepHours("sunday");
  return total;
};

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (idealSleepHours > actualSleepHours) {
    return `You are short of sleep by ${
      idealSleepHours - actualSleepHours
    } hours`;
  } else if (idealSleepHours < actualSleepHours) {
    return `You have overslept by ${idealSleepHours - actualSleepHours} hours`;
  } else {
    return `You have got the ideal sleep`;
  }
};

console.log(calculateSleepDebt());
