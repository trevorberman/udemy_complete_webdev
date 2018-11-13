// The Complete Web Developer Udemy Course - Section 11: Javascript Exercise Shopping List

var input = document.getElementById('userInput')
var button = document.getElementById('submit')
var shoppingList = document.querySelector('ul')
var items = document.querySelectorAll('li')
var removalButtons = document.getElementsByClassName('remove-item')

function inputLength () {
  return input.value.length
}

function addListItem () {
  // Create and append list item
  var listItem = document.createElement('li')
  listItem.appendChild(document.createTextNode(input.value))
  shoppingList.appendChild(listItem)
  // Create and append list item removal button
  var removeButton = document.createElement('span')
  removeButton.appendChild(document.createTextNode('x'))
  removeButton.classList.add('remove-item')
  listItem.appendChild(removeButton)
  removeButton.addEventListener('click', removeListItem)
  // Listen to mark list item done
  listItem.addEventListener('click', toggleDone)
  // Clear text input field
  input.value = ''
}

function removeListItem () {
  var li = this.closest('li')
  li.remove()
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

// Add listeners to existing list items
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', toggleDone)
  removalButtons[i].addEventListener('click', removeListItem)
}

// Exercise: DOM Events - Challenges
// [x] 1. If you click on the list item, it toggles the .done class on and off.

// [x] 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// [x] Append <span class=remove-item>x</span> to listItems
// [x] Add styles for .remove-item [text, margins, padding, borders]
// [x] Add JS to append span and class='remove-item' to list item when new list item is added
// [x] Add JS to remove list item and span.remove-item when .remove-item button clicked (+ event listener on .remove-item)

// [x] 3. BONUS: When adding a new list item, it automatically adds the delete button next to it.
