// The Complete Web Developer Udemy Course - Section 10: Javascript Exercise 7fb_2

// Create a basic facebook sign-up and sign-in exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
/*
var user = {
  username: 'Neil',
  password: 'IZEKfP*2b4bP'
}
*/

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    username: 'Neil',
    password: 'IZEKfP*2b4bP'
  },
  {
    username: 'Sally',
    password: 'r57k^HIT4Y#y'
  },
  {
    username: 'Ron',
    password: 'JKC5r1*ZouxC'
  }
]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: 'Neil',
    timeline: 'Fresh post!'
  },
  {
    username: 'Sally',
    timeline: "I'm online!!"
  },
  {
    username: 'Ron',
    timeline: 'I. Ron Butterfly!!!'
  }
]

var usernamePrompt = prompt('Whats your username?')
var passwordPrompt = prompt('Whats your password?')

function isUserValid (user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true
    }
  }
  return false
}

function signIn (user, pass) {
  if (isUserValid(user, pass) === true) {
    alert(
      newsfeed[0].timeline +
        '\n' +
        newsfeed[1].timeline +
        '\n' +
        newsfeed[2].timeline
    )
  } else {
    alert('You entered an incorrect username and password.')
  }
}

signIn(usernamePrompt, passwordPrompt)
