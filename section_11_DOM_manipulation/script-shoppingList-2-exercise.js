// The Complete Web Developer Udemy Course - Section 11: Javascript Exercise Shopping List

var input = document.getElementById('userInput')
var button = document.getElementById('submit')
var shoppingList = document.querySelector('ul')
var items = document.querySelectorAll('li')

function inputLength () {
  return input.value.length
}

function addListItem () {
  var listItem = document.createElement('li')
  listItem.appendChild(document.createTextNode(input.value))
  shoppingList.appendChild(listItem)
  listItem.addEventListener('click', toggleDone)
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

function toggleDone () {
  this.classList.toggle('done')
}

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', toggleDone)
}

// Exercise: DOM Events - Challenges
// [x] 1. If you click on the list item, it toggles the .done class on and off.

// [] 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

// [] 3. BONUS: When adding a new list item, it automatically adds the delete button next to it.
