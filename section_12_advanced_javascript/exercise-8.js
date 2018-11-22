// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line'
let turtle = '🐢'
let rabbit = '🐇'

// it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// when you do:
console.log(startLine)
console.log(turtle.padStart(9))
console.log(rabbit.padStart(9))

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable?
// Trims whitespace around the turtle char and adds = on the right out to 9 chars total.
// [x] Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=')

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this: 'my name is Rudolf the raindeer'

//  Works from QA
Object.entries(obj)
  .map(value => {
    return value.join(' ')
  })
  .join(' ')
