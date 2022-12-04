const fibonacci = function(num) {
    let fibbo = [1,1];
    let a;
    num = Number(num);

    if (num < 0) {
        return "OOPS";
    }
    else {
        for (i=3; i<= num; i++) {
            a = fibbo.length;
            b = fibbo[a-1] + fibbo[a-2]
            fibbo.push(b)
        }
    
        return fibbo[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
