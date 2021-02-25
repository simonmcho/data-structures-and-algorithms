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
        

function countUniquevalues(arr) {
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
