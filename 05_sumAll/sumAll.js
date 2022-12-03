const sumAll = function(num1, num2) {

    let sum = 0;
    let firstNum;
    let secondNum;

    if (num1 < 0 || num2 <0 || !Number.isFinite(num1) || !Number.isFinite(num2)) {
        sum = "ERROR";
    }
    else {
        if (num1<=num2) {
            firstNum = num1;
            secondNum = num2;
        }
        else {
            secondNum = num1;
            firstNum = num2;
        }

        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    }

    

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
