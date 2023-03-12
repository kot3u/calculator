let result = 0;
let mode = 'a';
let a = '';
let b = '';
let operator = '';
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const output = document.querySelector('.result');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

const operate = () => {
  if (a === '' || operator === '' || b === '') {
    return false;
  }

  a = parseFloat(a);
  b = parseFloat(b);
  if (operator === '+') {
    result = add(a, b);
  } else if (operator === '-') {
    result = substract(a, b);
  } else if (operator === '/') {
    result = divide(a, b);
  } else if (operator === '*') {
    result = multiply(a, b);
  } else {
    output.textContent = 'something went wrong, start over.';
  }
  output.textContent = result;
  a = result;
  b = '';
  mode = 'a';
  operator = '';
};

const appendNumber = (e) => {
  if (mode === 'a') {
    a += e.target.textContent;
    output.textContent = a;
  } else if (mode === 'b') {
    b += e.target.textContent;
    output.textContent = b;
  }
};

const setOperator = (e) => {
  if (operator != '') {
    operate();
  }
  operator = e.target.textContent;
  mode = 'b';
};

const clearContent = () => {
  a = '';
  b = '';
  mode = 'a';
  operator = '';
  output.textContent = a;
};

const deleteLastDigit = () => {
  if (mode === 'a') {
    a = a.slice(0, -1);
    output.textContent = a;
  } else if (mode === 'b') {
    b = b.slice(0, -1);
  }
};

operators.forEach((operator) => {
  operator.addEventListener('click', setOperator);
});

numbers.forEach((number) => {
  number.addEventListener('click', appendNumber);
});
equals.addEventListener('click', operate);
clear.addEventListener('click', clearContent);
del.addEventListener('click', deleteLastDigit);
