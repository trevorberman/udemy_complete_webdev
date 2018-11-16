// change everything below to the newer Javascript!

// let + const
let a = 'test'
let b = true
const c = 789
a = 'test2'

// Destructuring
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
}

/*
var firstName = person.firstName
var lastName = person.lastName
var age = person.age
var eyeColor = person.eyeColor
*/

const { firstName, lastName, age, eyeColor } = person

// Object properties
let aa = 'test'
let bb = true
const cb = 789

const okObj = { aa, bb, cc }

// Template strings
let message = `Hello ${firstName} Have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge (age = 10) {
  return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
let symb1 = Symbol('This is my first Symbol')

// Arrow functions
/*
function whereAmI (username, location) {
  if (username && location) {
    return 'I am not lost'
  } else {
    return 'I am totally lost!'
  }
}
*/
const whereAmI = (username, location) => {
  if (username && location) {
    return 'I am not lost'
  } else {
    return 'I am totally lost!'
  }
}
