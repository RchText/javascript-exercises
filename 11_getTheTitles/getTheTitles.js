const getTheTitles = function(array) {
    let bookTitles = [];
    for (book of array) {
        bookTitles.push(book.title)
    }

        return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
