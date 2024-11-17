const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';
let result = '';

function updateDisplay(value) {
  display.textContent = value;
}

// Clear the display and reset variables
function clearCalculator() {
  currentInput = '';
  operator = '';
  firstValue = '';
  secondValue = '';
  result = '';
  updateDisplay('0');
}

// Handle button clicks
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') {
      clearCalculator();
    } else if (value === '=') {
      secondValue = currentInput;
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      firstValue = currentInput;
      operator = value;
      currentInput = '';
    } else {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

// Perform calculation based on the operator
function calculate() {
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    default:
      return;
  }
  updateDisplay(result);
  currentInput = result.toString();
  operator = '';
  firstValue = '';
  secondValue = '';
}
