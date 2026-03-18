// const arr [10, 12, 18, 6, 4] target is, bring the output as 30, for the summation of two numbers,
//  and the two numbers, and  print their indices.

const arr = [10, 12, 18, 6, 4, 18];

for (let i = 0; i < arr.length; i++) {
  // if(arr[i]+arr[i+1] == 30) {
  //     console.log("Your sum as 30 is given by these two indices");
  //     console.log(i, i+1);
  // }

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 30) {
      console.log("Your sum as 30 is given by these two indices");
      console.log(i, j);
    }
  }
}
