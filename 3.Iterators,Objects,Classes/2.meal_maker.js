let menu = {
  _meal: " ",
  _price: 0,
  //setters
  set mealToCheck(meal) {
    if (typeof meal == "string") {
      return (this._meal = meal);
    } else {
      return "not a string";
    }
  },
  set priceToCheck(price) {
    if (typeof price == "number") {
      return (this._price = price);
    } else {
      return "not a number";
    }
  },
  //getters
  get todaysSpecial() {
    if ((this._meal == "") | (this._price == 0)) {
      return "Meal or Price was not set correctly";
    } else {
      return `Today's special is ${this._meal}, and the price is $${this._price}`;
    }
  },
};

menu.mealToCheck = "lasagna";
menu.priceToCheck = 10;
console.log(menu.todaysSpecial);
