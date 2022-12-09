
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