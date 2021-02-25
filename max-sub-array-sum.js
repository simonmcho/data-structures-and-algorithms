/*
  Write a function called maxSubarraySum
  Accepts an array of numbers and a number called "n" as args
  The function should calculate the max sum of "n" consecutive elements in the array
*/

// EG maxSubarraySum([4,2,1,6,2], 4) // 13
// EG maxSubarraySum([1,2,5,2,8,1,5], 4) // 17

// On^2 solution
function maxSubarraySum(arr, n) {
  // return null if arr or n is empty
  if (arr.length === 0 || n < 1) {
    return null
  }
  // set max
  let max = -Infinity;
  // loop through arr. remember the last iteration of the loop should start at arr.length - n + 1 because it's a range of numbers
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

[1, 2, 3, 5, 6, 3, 4]
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  // init maxSum with first 3 indices of arr
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // store temp value with maxSum, later to compare with maxSum
  let tempSum = maxSum;
  // iterate from nth position
  // tempSum is changed by subtracting first number of the 3 values, and adding ith number
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}