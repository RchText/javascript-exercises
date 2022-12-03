const removeFromArray = function(array, ...otherArgs) {
    let newArr = array;
    let a;
     
    let indices = [];

    for (element of otherArgs) {
        if (newArr.includes(element) == true) {
            a = newArr.indexOf(element);
            newArr.splice(a,1)
        }
        else {
            continue;
        }
        
    }


    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
