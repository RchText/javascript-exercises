const findTheOldest = function(array) {
    for (person of array) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        
        person.age = person.yearOfDeath - person.yearOfBirth;

    }
    
    result = array.reduce((a, b) => a["age"] > b["age"] ? a : b) ;

    return result

    // Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);


};

// Do not edit below this line
module.exports = findTheOldest;
