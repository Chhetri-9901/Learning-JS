/* 2. Generate all combinations of a string [26/08/2025]

  Approach 1: Use .push() and .slice() method
  Approach 2: Using the .charAt() and .concat() method
  Approach 3: Using for loop and .push() method
  Approach 4: Using Recursion
*/

const dogStr = "Dog";
let dogArr = [];

//  Approach 1: Use .push() and .slice() method
for (let i = 0; i < dogStr.length; i++) {
  for (let j = i + 1; j < dogStr.length + 1; j++) {
    let indexDogValue = dogStr.slice(i, j);
    console.log(indexDogValue);
    dogArr.push(indexDogValue);
    console.log(dogArr);
  }
}
console.log("Final vaue: " + dogArr);

// Approach 2: Using the .charAt() and .concat() method
for (let i = 0; i < dogStr.length; i++) {
  let newIndexDogValue = dogStr.charAt(i);
  let tempArr = [newIndexDogValue];

  for (let item of dogArr) {
    tempArr.push(item + newIndexDogValue);
  }

  dogArr = dogArr.concat(tempArr);
}
console.log("Final vaue: " + dogArr);
