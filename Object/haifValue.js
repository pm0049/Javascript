/*
The function halfValue takes an array of numbers. It should return a new array with all the original values halved.
Odd numbers should be rounded up to the nearest whole number.
*/
function halfValue(numbers) {
  return numbers.map(number => Math.ceil(number / 2));
}

module.exports = halfValue;
