const caesar = function(string, num) {
    if (num > 26 || num < -26) {
        num = num % 26;
    }
    
    letterArray = string.split("");

    numberArray = letterArray.map(str => str.charCodeAt());

    shiftedNumberArray = [];
    
    for (number of numberArray) {
        
        if ((number > 64 && number < 91) || ((number > 96 && number < 123))) {

                                 
            if (number > 64 && number < 91 && number + num > 90){
                overflow = (number + num) - 90;
                newNumber = 64 + overflow;
                shiftedNumberArray.push(newNumber);
            }
            else if (number > 96 && number < 123 && number + num > 122){
                overflow = (number + num) - 122;
                newNumber = 96 + overflow;
                shiftedNumberArray.push(newNumber);
            }
            else if (number > 64 && number < 91 && number + num < 65){
                overflow = 65 - (number + num);
                newNumber = 91 - overflow;
                shiftedNumberArray.push(newNumber);
            }
            else if (number > 96 && number < 123 && number + num < 97){
                overflow = 97 - (number + num);
                newNumber = 123 - overflow;
                shiftedNumberArray.push(newNumber);
            }
            else {
                newNumber = number + num;
                shiftedNumberArray.push(newNumber);
            }
            
            
        }
        else {
            shiftedNumberArray.push(number);
        }
    }

    // for (number of numberArray) {
    //     if ((number > 64 && number < 91) || ((number > 96 && number < 123))) {
    //         shiftedNumberArray = numberArray.map(val => val + num);
    //     }
    // }

    // shiftedNumberArray = numberArray.map(val => val + num);

    newString = String.fromCharCode(...shiftedNumberArray)
 
    return newString;

};

// Do not edit below this line
module.exports = caesar;
