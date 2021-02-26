/*
  Given a sorted array of numbers
  Write a function that accepts an array arg and a n arg
  The function sould return the index of the value n in the array
  If not found, return -1
*/

// O(n) solution
function search(arr, n) {
  // loop through array, if found, return index
  let found = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      found = i;
    }
  }
  // if not found return -1
  return found;
}

function search(arr, n) {
  // split array down the middle
  // is last index of first array greater than n? then ignore
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}