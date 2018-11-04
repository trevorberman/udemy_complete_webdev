// The Complete Web Developer Udemy Course - Section 10: Javascript Exercise 5

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

/*
var age = prompt("What is your age?");

if (Number(age) < 18) {
  alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
}
*/

// 1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

/*
var age

function checkDriverAge () {
  age = prompt(
    "I need to veify you're old enough to drive this car. Please enter your age."
  )

  age = Number(age)

  if (isNaN(age)) {
    // Recursively test for NaN
    alert(
      "Sorry, you've typed an invalid entry. Please enter your age as a number."
    )
    checkDriverAge()
  } // No else statement needed. Prompt returns the user input as a number.
}

function ignition () {
  checkDriverAge()

  if (age < 18) {
    alert("Sorry, you're too young to drive this car. Powering off.")
  } else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!')
  } else {
    alert('Powering On. Enjoy the ride!')
  }
}

ignition()
*/

// 2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter checkDriverAge(92) it returns "Powering On. Enjoy the ride!"

var age

var checkDriverAge2 = function (age) {
  return age
}

function ignition () {
//  checkDriverAge2(92)

  if (age < 18) {
    alert("Sorry, you're too young to drive this car. Powering off.")
  } else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!')
  } else {
    alert('Powering On. Enjoy the ride!')
  }
}

// ignition()
ignition(checkDriverAge2(92))
