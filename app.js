/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');

/*-------------------------------- Variables --------------------------------*/
let num1='';
let num2='';
let operator='';
let total = '';

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
/*buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });*/

  calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);
  

  // If the button is a number
  if (event.target.classList.contains('number')) {
    if (operator === '') {
      num1 += event.target.innerText;
    } else {
      num2 += event.target.innerText;
    }
  }

  // If the button is an operator
  if (event.target.classList.contains('operator')) {
    operator = event.target.innerText;
  }

  // If the button is equal
  if (event.target.classList.contains('equals')) {
    if(operator === '+'){
      total = Number(num1) + Number(num2);
    }
    if(operator === '-'){
      total = Number(num1) - Number(num2);
    }
    if(operator === '*'){
      total = Number(num1) * Number(num2);
    }
    if (operator === '/'){
      total = Number(num1) / Number(num2);
    }
    console.log('the result is', total);

  }
   //if the button is C - clear
    if(event.target.innerText === 'C'){
       clear();
       console.log("the caclulator is cleared");
    }
    


  
  });
/*-------------------------------- Functions --------------------------------*/
function clear(){
  num1='';
  num2='';
  operator='';
  total='';
}