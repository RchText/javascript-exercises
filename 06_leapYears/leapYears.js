const leapYears = function(year) {
    result = false;

    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 == 0) {
            result = true;
        }
        else if (year % 100 == 0 && year % 400 != 0) {
            result = false;
        }
        else {
            result = true;
        }
    }

    return result;

};

// Do not edit below this line
module.exports = leapYears;
