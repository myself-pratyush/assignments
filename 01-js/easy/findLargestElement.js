/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
should return undefined for an empty array.
*/

function findLargestElement(numbers) {
    return numbers.length === 0 ? undefined : Math.max(...numbers);
}

module.exports = findLargestElement;