// The Complete Web Developer Udemy Course - Section 11: Javascript Exercise Shopping List

var input = document.getElementById('userInput')
var button = document.getElementById('submit')
var shoppingList = document.querySelector('ul')

function inputLength () {
  return input.value.length
}

function addListItem () {
  var listItem = document.createElement('li')
  listItem.appendChild(document.createTextNode(input.value))
  shoppingList.appendChild(listItem)
  input.value = ''
}

/*
button.addEventListener('click', function () {
  if (inputLength() > 0) {
    addListItem()
  }
})

input.addEventListener('keypress', function (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addListItem()
  }
})
*/

// Refactor the functions attached to button and input above
function addListItemAfterClick () {
  if (inputLength() > 0) {
    addListItem()
  }
}

function addListItemAfterSubmit (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    addListItem()
  }
}

button.addEventListener('click', addListItemAfterClick)
input.addEventListener('keypress', addListItemAfterSubmit)
