/*
From CODE WARS

1. Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.
*/

let quesOneInput = [1, -2, 3, -4, 5];
console.log(quesOneInput);

let quesOneFinalVal = quesOneInput.map((e)=>{
    return (e * -1);
});
console.log(quesOneFinalVal);



/*
From CODE WARS

2. Write a function that always returns `5`
Sounds easy right? Just bear in mind that you can't use any of the following characters: `0123456789*+-/`
Good luck :)
*/

function returnFive() {
return 'abcde'.length;
}
console.log((returnFive()));


/*
From CODE WARS

3. 
a) Create a function that takes an integer as an argument and 
returns "Even" for even numbers or "Odd" for odd numbers.
b) Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function thirdQuesEvenOdd(num) {
    if(num%2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}

function thirdQuesReverse(word) {
    let wordArr = word.split('',word.length);
    let thirdQuesFinalAns = [];
    for(i=word.length-1; i>=0; i--) {
        thirdQuesFinalAns.push(wordArr[i]);
    }
    console.log(thirdQuesFinalAns.join(''))
}

thirdQuesReverse("Hello");