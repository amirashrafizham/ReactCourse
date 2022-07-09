// Variables
let kelvin = 293;
let celcius = kelvin - 237;

// Math Operations
let fahrenheit = celcius * (9 / 5) + 32;
let newton_scale = celcius * (33 / 100);

// Floor Function
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

//String interpolation
let all_temps = `Kelvin: ${kelvin}\nFahrenheit: ${fahrenheit}\nCelcius: ${celcius}`;
console.log(all_temps);
