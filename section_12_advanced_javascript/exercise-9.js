/*
Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer.

First, start off by reading this article: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2
*/

/*
Challenge 1: Clean the room function
Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
*/
// [x] Sort the arrgument array
// Where the sorted array contains duplicates, collect those into sub-arrays
// -- Create another array for the subarrays.
// -- ?? Compare numbers in original array; SOMEHOW...
// ---- If a - b < 0 (nums in previously sorted list NOT the same)
// ------ remove 'a' from the sorted array and add it to the 'i' index of the new array
// ---- Else (when a - b = 0) (nums in previously sorted list ARE the same)
// BONUS: Sort duplicate items into sub-arrays with matching types (num, string)
let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

const cleanTheRoom = numArray => {
  numArray.sort((a, b) => a - b)
  return numArray
}

cleanTheRoom(array)

let newArray = []
for (let item of array) {
  // filter array === item and push return array of matching items to newArray
  let matches = array.filter(item => )
  // WTF? How do I use array on an item to compare it to others and return array of matches? LOGIC...UGH!!
}
/*
Challenge 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number.

For example: answer([1,2,3], 4)should return [1,3]
*/

/*
Challenge 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats, so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
*/
