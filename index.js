function hasTargetSum(array, target) {
  const sums = array.map((number, index) => array.slice(index + 1).map(secondNumber => number + secondNumber));
  console.log(sums);
  const concatenatedSums = [].concat(...sums);
  console.log(concatenatedSums);
  return concatenatedSums.includes(target);
}

/* 
The big O time complexity of my function is  O(n²) because there is a nested iteration consisting of a map method inside another map method.
*/

/* 
Initialize a variable to hold arrays of all possible sums in the input array.
Iterate over the array twice getting all possible sums.
Concatenate the arrays to create one array of all possible sums.
Check if the sums include the target sum. 
*/

/*
  I initialized an array sum to take up arrays of sums for each number in the array with the other numbers and assigned it to an expression.
  In the expression i used map to iterate over the array, passed a number and its' index as the arguments for the callback function.
  I used slice to create a new array starting from the next index of the number being currently iterated. 
  I used another map to iterate over the new array and return the second number to add to the first number being iterated over.
  In the second maps' callback function i added the first number to the second number.
  Sums was now equal to an array of all possible sums of the numbers in the array  passed, console logged to verify this.
  I initialized a new variable concatenatedSums and set it to an empty array.
  I used the .concat method to concatenate all the items in the arrays in sums using a spread operator into the new array.
  I used the .includes method to check if the target sum passed in as a parameter to the function hasTargetSum is included in the concatenated array and returned the boolean result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 19, -4, 6, 30], 26));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;