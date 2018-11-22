// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah']
dragons.includes('John')
dragons.includes('Sarah')

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
const certainDragons = []
dragons.map(item => {
  if (item.includes('Sa') === true) {
    certainDragons.push(item)
  }
})
console.log('certainDragons', certainDragons)

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
// search: es7 exponent
const pow100 = num => num ** 100
pow100(2)

// #4) Using your function from #3, put in the paramter 10000. What is the result?
pow100(10000)

// Research for yourself why you get this result
// exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308
