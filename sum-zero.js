/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both those values, or undefined if a pair does not exist.

Example:
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2,0,5]) // undefined
*/

// N^2 run time and O1 space example
function sumZeroTwoLoops(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
  return undefined;
};

// On time, O1 space example
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) { // Cannot be less than OR equal to because you end up summing the same number by itself
    let sum = arr[left] + arr[right];
    if (sum > 0) {
      right -= 1;
    }
    if (sum < 0) {
      left += 1;
    }
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
  }
  return undefined;
}