// The Complete Web Developer Udemy Course - Section 11: Javascript Exercise Gradient Background Generator

var body = document.getElementById('gradient')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var button = document.getElementById('randomizer')
var css = document.querySelector('h3')

function setGradient () {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'

  css.textContent = body.style.background + ';'
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)

// Exercise: Background Generator - Challenges
// [x] 1. Write code so that the colour inputs match the background generated on the first page load.

/*
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setGradient)
} else {
  setGradient()
}
*/

// [x] 2. Display the initial CSS linear gradient property on page load.

// [x] 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var randomRGB = function () {
  var rgbColor = []
  for (var i = 0; rgbColor.length < 3; i++) {
    rgbColor[i] = Math.round(Math.random() * 255)
  }
  return rgbColor
}

function rgbToHex (rgb) {
  var hexColor = ''
  for (var i = 0; i < rgb.length; i++) {
    var hex = rgb[i].toString(16)
    if (hex.length < 2) {
      hex = '0' + hex
    }
    hexColor += hex
  }
  return '#' + hexColor
}

function setRandomColors () {
  color1.value = rgbToHex(randomRGB())
  color2.value = rgbToHex(randomRGB())
}

button.addEventListener('click', function () {
  setRandomColors()
  setGradient()
})

// This returns a random Hex value.
// rgbToHex(randomRGB())

// [x] 3. BONUS BONUS: Refactor to show a random gradient background on page load.

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setRandomColors)
  document.addEventListener('DOMContentLoaded', setGradient)
} else {
  setRandomColors()
  setGradient()
}
