console.log("Hello World");

// 1. Convert string to integer without using parseInt() function [26/08/2025]
const str = "1234";
console.log(str);

const num = Number(str); // Using Number()
returnTypeOf(num);

const num2 = Math.floor(str); // Using floor() or ceil()
returnTypeOf(num2);

// Using coercion
const newNumberString = "555";
const changeToInteger = 1 * newNumberString;
returnTypeOf(changeToInteger);

// Same way Math.round also works and + operator too to convery a string that is a number to number/integer type.

function returnTypeOf(value) {
  console.log(`This ${value} is of type ${typeof value}`);
}
