// The Complete Web Developer Udemy Course - Section 10: Javascript Exercise 7fb

// Create a basic facebook sign-up and sign-in exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
  username: 'Neil',
  password: 'IZEKfP*2b4bP'
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: 'Neil',
    timeline: 'Fresh post!'
  },
  {
    username: 'Alex',
    timeline: "I'm online!!"
  },
  {
    username: 'Ron',
    timeline: 'I. Ron Butterfly!!!'
  }
]

var usernamePrompt = prompt('Whats your username?')
var passwordPrompt = prompt('Whats your password?')

function signIn (username, password) {
  if (username === database[0].username && password === database[0].password) {
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
