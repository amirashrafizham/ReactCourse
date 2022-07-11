//ADVANCED REVISION
const robot = {
  model: "pi-top",
  energyLevel: 100,

  //using this keyword
  provideInfo() {
    return `${this.model} is currently at ${this.energyLevel}% battery`;
  },

  //javascript doesn't have private like c#. We have to use _, getters and setters. _ doesn't do anything, it just tells the programmer that this should be set as private
  _wheels: 3,
  get wheels() {
    if (typeof this._wheels == "number") {
      return `${this.model} has ${this._wheels} wheels`;
    } else {
      return "error";
    }
  },
  set wheels(num) {
    if (typeof num == "number") {
      this._wheels = num;
    } else {
      return "not a number";
    }
  },
};

//using this keyword
console.log(robot.provideInfo());

//using getter
console.log(robot.wheels);

//using setter
robot.wheels = 4;
console.log(robot.wheels);

//using destructured assignment to access an element.
let robot_wheels = robot.wheels; //normal way
let { wheels } = robot; //destructured assignment

//using Built-in Methods
const robot_keys = Object.keys(robot); //to access the keys (properties/methods in an object)
const robot_assignment = Object.entries(robot); //to access key-value pair
