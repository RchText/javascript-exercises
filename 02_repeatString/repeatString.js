const repeatString = function(string, num) {

    if (num < 0) {
        return "ERROR"
    }
    else {
        answer = string.repeat(num);
        return answer;

    }
    

};

// Do not edit below this line
module.exports = repeatString;
