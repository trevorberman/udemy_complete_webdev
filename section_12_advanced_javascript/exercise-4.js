// Solve these problems:

// #1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b

// Closure: What does the last line return?
const addTo = x => y => x + y
// addTo = (10) => (y) => 10 + y
var addToTen = addTo(10)
// addTo = (10) => (3) => 10 + 3
addToTen(3)
// result === 13

const subtractFrom = x => y => x - y
// addTo = (10) => (y) => 10 - y
var subtractFromTen = subtractFrom(10)
// addTo = (10) => (3) => 10 - 3
subtractFromTen(3)
// result === 7

// Currying: What does the last line return?
// const sum = (a, b) => a + b
const curriedSum = a => b => a + b
// const curriedSum = a => b => 30 + 1
curriedSum(30)(1)
// result === 31

// Currying: What does the last line return?
// const sum = (a, b) => a + b
const curriedSum2 = a => b => a + b
// const curriedSum2 = a => b => 5 + b
const add5 = curriedSum2(5)
// const curriedSum2 = a => b => 5 + 12
add5(12)
// result === 17

// Composing: What does the last line return?
const compose = (f, g) => a => f(g(a))
const add1 = num => num + 1
const plus5 = num => num + 5
// const compose = (add1, g) => 10 => add1(g(10)) === 11
// const compose = (add1, plus5) => 11 => add1(plsu5(11)) === 16
compose(
  add1,
  plus5
)(10)
// result === 16

// What are the two elements of a pure function?
// reduce/eliminate side effects and determinism ~ same input always produces same output, no matter how many times you run it through the function
