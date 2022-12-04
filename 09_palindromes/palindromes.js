const palindromes = function (string) {
    result = false;

    newString = string.replace(/\W|_/g, '');
    
    modString = newString.toLowerCase();
    
    stringArray = modString.split("");
    reversedArray = stringArray.reverse();
    b = reversedArray.join("");

    if (modString == b) {
        result = true;
    }
    else {
        result = false;
    }

    return result;

};

// Do not edit below this line
module.exports = palindromes;
