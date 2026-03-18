//  6. Check whether a string is palindrome or not [30/08/2025]
// A palindrome is something that is same from both the end - "MADAM", 121 etc

console.log("Question 6");
const value = "me";

const checkvalue = value.toLowerCase();
const arrCheckValue = [...checkvalue];
let arrCheckValueLength = arrCheckValue.length;
let count = 0;

const calcPalindrome = function (anyWord, anyWordLength) {
  for (let i = 0; i < Math.floor(arrCheckValueLength / 2) + 1; i++) {
    if (i >= Math.floor(arrCheckValueLength / 2)) {
      break;
    } else if (
      arrCheckValue[i] === arrCheckValue[arrCheckValueLength - 1 - i]
    ) {
      count++;
    } else {
      console.log("Not a palindrome");
    }
  }

  declarePalindrome(count, arrCheckValueLength);
};

const declarePalindrome = function (count, anyWordLength) {
  if (count === Math.floor(arrCheckValueLength / 2)) {
    console.log("Your number is a palindrome");
  }
};

calcPalindrome(arrCheckValue, arrCheckValueLength);
