//BASIC REVISION

//Creating an object
let fasterShip = {
  //property
  fuelType: "Turbo Fuel",
  color: "Silver",
  numCrew: 3,
  //property-array
  planetArray: ["Venus", "Earth", "Mars"],
  //methods
  takeOff() {
    return "flight is taking off";
  },
  landing() {
    return "flight is landing";
  },
  //nested object
  crew_members: {
    captain: {
      name: "amir",
      degree: "mechanical engineering",
    },
    co_pilot1: {
      name: "ashraf",
      degree: "software engineering",
    },
    co_pilot2: {
      name: "miraz",
      degree: "mechatronics engineering",
    },
  },
};

//Accessing properties and methods
console.log(fasterShip.numCrew);
console.log(fasterShip.takeOff());

//Accessing nested objects
console.log(
  `The captain's name is : ${fasterShip.crew_members.captain.name}\nThe copilot members' names are: ${fasterShip.crew_members.co_pilot1.name}, ${fasterShip.crew_members.co_pilot2.name} `
);

//Looping through nested objects using for...in
for (let key in fasterShip.crew_members) {
  console.log(`${key}: ${fasterShip.crew_members[key].name}`);
}
