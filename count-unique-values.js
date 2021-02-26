/*
Implement a function called countUniqueValues
This function accepts a SORTED array
It counts the UNIQUE values in the array
There can be NEGATIVE numbers in the array
The return value is the number of unique values from the array arg

example:
countUniqueValues([1, 1, 1, 1, 2]) // 2
countUniqueValues([-3, -1, 0, 0, 0, 1, 2, 2]) // 5
*/

[1, 1, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 4]
        

function countUniqueValues(arr) {
  // pointer should be the incremental counter

  // escape hatch for arr length 0
  if (arr.length === 0) {
    return 0;
  }

  let pointer = 0;

  // If pointer value and scout value diff, increase pointer ref and replace pointer value with scout value
  for (let scout = 1; scout < arr.length; scout++) {
    if (arr[pointer] !== arr[scout]) {
      pointer++;
      arr[pointer] = arr[scout];
    }
  }

  // return + 1 because arr starts at 0
  return pointer + 1;
}

function countUniqueValues(arr) {
  // keep a counter for unique values
  // increment counter when doesnt exist in object
  const storage = {};
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!storage[arr[i]]) {
      storage[arr[i]] = true;
      counter++;
    }
  }
  return counter;
}

/*
Implement a function called countUniqueValues
This function accepts a SORTED array
It counts the UNIQUE values in the array
There can be NEGATIVE numbers in the array
The return value is the number of unique values from the array arg

example:
countUniqueValues([1, 1, 1, 1, 2]) // 2
countUniqueValues([-3, -1, 0, 0, 0, 1, 2, 2]) // 5
*/

function countUniqueValues(arr) {
  // keep counter
  let uniqueValueCounter = 0;
  // create hashmap
  const values = {}
  // loop through, if doesnt exist in hashmap, add to hashmap and increase counter
  for (let i = 0; i < arr.length; i++) {
    if (!values[arr[i]]) {
      uniqueValueCounter++;
      values[arr[i]] = true;
    }
  }
  return uniqueValueCounter;
}

function countUniqueValues(arr) {
  // keep a pointer
  // use a scout pointer to move ahead
  // iterate through arr, use scout as the iterator
  // if same, continue iterating. why? Think of an arr with 1 unique value. If pointer never moves, the unique value is 1
  // if diff, increment pointer
  if (arr.length === 0) {
    return 0;
  }
  let pointer = 0; // cant start at 1 to do initial count, because you skip the first unique value
  for (let scout = 1; scout < arr.length; scout++) {
    if (arr[pointer] !== arr[scout]) {
      pointer++;
      arr[pointer] = arr[scout]
    }
  }
  return pointer + 1;
}