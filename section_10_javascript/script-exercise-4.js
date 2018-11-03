// The Complete Web Developer Udemy Course - Section 10: Javascript Exercise 4

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt(
  "I need to veify you're old enough to drive this car. Please enter your age."
)

function ignition (driverAge) {
  driverAge = Number(driverAge)

  if (isNaN(driverAge)) {
    // Recursively test for NaN
    var reAge = prompt(
      "Sorry, you've typed an invalid entry. Please enter your age as a number."
    )
    ignition(reAge)
  } else if (driverAge < 18) {
    alert("Sorry, you're too young to drive this car. Powering off.")
  } else if (driverAge === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!')
  } else {
    alert('Powering On. Enjoy the ride!')
  }
}

ignition(age)
