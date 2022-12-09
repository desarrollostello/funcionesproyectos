
// Create a function that takes an array of numbers and returns a new array with only the even numbers

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

var map = new Map();

map.set('nombre', 'Juan');
map.set('edad', 25);
map.set('pais', 'España');

console.log(map); // Map { 'nombre' => 'Juan', 'edad' => 25, 'pais' => 'España' }

//1. Para validar una dirección de correo electrónico:
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])


var miArreglo = new Array(length);
//Object
const car = {
  make: 'Honda',
  model: 'Civic',
  year: 2020,
};

//Properties
car.make // Honda
car.model // Civic
car.year // 2020

//Methods
car.start = function() {
  console.log('Vroom!');
};

car.start(); // Vroom!
