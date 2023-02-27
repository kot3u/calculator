let result = 0;
let mode = 'a';
let a = '';
let b = '';
let operator = '';
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const output = document.querySelector('.result');
const equals = document.querySelector('#equals');

let add = (a, b) => { return a + b; };
let substract = (a, b) => { return a - b; };
let divide = (a, b) => { return a / b; };
let multiply = (a, b) => { return a * b; };

let operate = () => {
  if(a === '' || operator === '' || b === ''){
  
  };

  a = parseFloat(a);
  b = parseFloat(b);
  if(operator === '+'){
    result = add(a, b);
  }
  else if (operator === '-') {
    result = substract(a, b);
  }
  else if (operator === '/') {
    result = divide(a, b);
  }
  else if (operator === '*') {
    result = multiply(a, b);
  }
  else {
    output.textContent = 'something went wrong, start over.';
  };
  output.textContent = result;
  a = result;
  b = '';
  mode = 'a';
  operator= '';
};

let appendNumber = (e) => {
  if(mode === 'a'){
    a += e.target.textContent;
    output.textContent = a;
  }
  else if(mode === 'b'){
    b += e.target.textContent;
    output.textContent = b;
  };
}

numbers.forEach(number => {
  number.addEventListener('click', appendNumber);
});

let setOperator = (e) => {
  if(operator != '' ){
    operate()
  };
  operator = e.target.textContent;
  mode = 'b'
};

operators.forEach(operator => {
  operator.addEventListener('click', setOperator);
})

equals.addEventListener('click', operate);