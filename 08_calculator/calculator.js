const add = function(num1, num2) {
  result = num1 + num2;
  return result;
	
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(array) {
  let answer = 0;
  if (array == []) {
    answer = 0;
  }
  else {
    for (item of array) {
      answer += item;
    }
  }

  return answer;
	
};

const multiply = function(array) {
  let answer = 0;
  
  if (array == []) {
    answer = 0;
  }
  else {
    answer += 1;
    for (item of array) {
      answer *= item;
    }
  }

  return answer;

};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
	
};

const factorial = function(num) {
  let answer = 1;
  if (num == 1 || num == 0) {
    answer = 1;
  }
  else {
    for (i = 1; i <= num; i++) {
      answer *= i;
    }
  }

  return answer;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
