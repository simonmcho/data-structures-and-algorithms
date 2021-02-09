// Write a function that takes 2 strings
// The function will determine if the second string is an anagram of the first string
// If it is an anagram, return true. Else, return false

function validAnagram(firstStr, secondStr) {
  // If lengths of both strings are diff, return false
  if (firstStr.length !== secondStr.length) {
      return false;
  }

  // Create var for first Str
  let storedFirstStr = firstStr;

  // Loop through second string
  for (let i = 0; i < secondStr.length; i++) {
      // In the loop, replace stored first str's char with current iteration of second str char with ''
      storedFirstStr = storedFirstStr.replace(secondStr[i], '');
  }
  
  // After the loop, if stored var is '', return true, else return false
  return storedFirstStr === '';
}

validAnagram('testing', 'estgnit') // returns true
validAnagram('wowww', 'wosww') // returns false
validAnagram('qwertyt', 'ttyqrew') // returns true
