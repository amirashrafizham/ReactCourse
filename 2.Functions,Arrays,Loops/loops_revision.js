function while_function() {
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
}

function for_function() {
  let array = [0, 1, 2, 3, 4, 5];
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function for_function_reversed() {
  let array = [0, 1, 2, 3, 4, 5];
  for (let index = array.length; index > -1; index--) {
    console.log(array[index]);
  }
}

function nested_loops() {
  let weather = ["Sunny", "Rainy", "Windy", "Stormy"];
  let scenery = ["Beach", "Mountain", "Forest"];
  for (let i = 0; i < weather.length; i++) {
    for (let j = 0; j < scenery.length; j++) {
      console.log(`${weather[i]} ${scenery[j]}`);
      if (weather[i] == "Stormy" && scenery[j] == "Beach") {
        console.log("BITCH!");
        break;
      }
    }
  }
}

function do_while() {
  x = 0;
  i = 0;
  do {
    x = x + i;
    console.log(x);
    i += 1;
  } while (i < 5);
}
