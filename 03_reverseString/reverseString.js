const reverseString = function(input) {
    arr = input.split("");
    arrReverse = arr.reverse();
    reversedString = arrReverse.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
