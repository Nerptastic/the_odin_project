let firstOperand = ''
let secondOperand = ''
let currentOperator = null


const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandElement = document.querySelector('[data-previous-operand]')
const currentOperandElement = document.querySelector('[data-current-operand]')

clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
equalsButton.addEventListener('click', evaluate)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => chooseOperator(button.textContent))
)


function clear() {
  // Set the currentOperandElement and the previousOperandElements back to zero
  previousOperandElement.textContent = ''
  currentOperandElement.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function appendNumber(number) {
    // Adds a number to the currentOperandElement
    currentOperandElement.textContent += number
}

function deleteNumber() {
  // Removes a number from the currentOperandElement
  currentOperandElement.textContent = currentOperandElement.textContent
  .toString()
  .slice(0, -1)
}

function chooseOperator(operator) {
  // decides which operator to use for the calculation
  firstOperand = currentOperandElement.textContent
  currentOperator = operator
  console.log(currentOperator)
  previousOperandElement.textContent = `${currentOperandElement.textContent} ${currentOperator}`
  currentOperandElement.textContent = ''
  return currentOperator
}

function evaluate() {
  // takes previousOperandElement, CurrentOperandElement, and the Operator and calculates
  if (currentOperator === '÷' && currentOperandElement.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = currentOperandElement.textContent

  currentOperandElement.textContent = operate(currentOperator, firstOperand, secondOperand)
  previousOperandElement.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`
  currentOperation = null
}

function updateDisplay() {
  //Updates the display with the correct information after calculating
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

