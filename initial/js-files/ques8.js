const creditCardNum = "1234 1234 1234 1234";

const ccMask = (ccNum) => {
    let maskedCCNum = ccNum;
    maskedCCNum = maskedCCNum.slice(-4).padStart(15, "x");     
    return maskedCCNum;
}

const checkOne = ccMask(creditCardNum);
console.log(checkOne);