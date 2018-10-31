// The Complete Web Developer Udemy Course - Section 10: Javascript Exercise 3

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.

/*
var firstNum = prompt('Enter your first number for an addition operation.')

var secondNum = prompt('Enter another number to add to your first.')

var sumNums = Number(firstNum) + Number(secondNum)

alert('Adding your two numbers totals ' + sumNums + '.')
*/

// BONUS: Make a program that can subtract, multiply, and also divide!

var numsToMath = []
var calcNums

function getNums () {
  var firstNum = prompt('Enter your first number for an addition operation.')
  var secondNum = prompt('Enter another number to add to your first.')
  numsToMath[0] = Number(firstNum)
  numsToMath[1] = Number(secondNum)
  return numsToMath
}

var mathOperation = prompt(
  'Which math operation would you like to perform on two numbers: Add, Subtract, Multiply, or Divide?'
)

if (mathOperation === 'Add' || mathOperation === 'add') {
  getNums()
  calcNums = numsToMath[0] + numsToMath[1]
  alert('Adding your two numbers totals ' + calcNums + '.')
} else if (mathOperation === 'Subtract' || mathOperation === 'subtract') {
  getNums()
  calcNums = numsToMath[0] - numsToMath[1]
  alert('Subtracting your two numbers totals ' + calcNums + '.')
} else if (mathOperation === 'Multiply' || mathOperation === 'multiply') {
  getNums()
  calcNums = numsToMath[0] * numsToMath[1]
  alert('Multiplying your two numbers totals ' + calcNums + '.')
} else if (mathOperation === 'Divide' || mathOperation === 'divide') {
  getNums()
  calcNums = numsToMath[0] / numsToMath[1]
  alert('Dividing your two numbers totals ' + calcNums + '.')
} else {
  alert('Sorry, ' + mathOperation + ' is not a valid math operation.')
}
