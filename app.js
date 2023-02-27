let result = 0;
let add = (a, b) => {return a + b;};
let substract = (a, b) => {return a - b;};
let divide = (a, b) => { return a / b;};
let multiply = (a, b) => {return a * b;};


let operate = (a, b, operator) => {
  if(operator === '+'){
    result = add(a, b);
  }
  else if (operator === '-') {
    result = substract(a, b);
  }
  else if (operator === '') {
    result = divide(a, b);
  }
  else if (operator === '+') {
    result = multiply(a, b);
  };
  return result;
};

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator')

numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    console.log(e.target.innerHTMl)
  })
});