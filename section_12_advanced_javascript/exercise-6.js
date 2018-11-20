//Evaluate these:
//#1
[2] === [2] // False
{} === {} // False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // object1.a === 4
const object2 = object1; // object2.a === 4
const object3 = object2; // object3.a === 4
const object4 = { a: 5}; // object4.a === 5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.
class Animal {
  constructor (name, type, color) {
    this.name = name
    this.type = type
    this.color = color
  }
  introduce () {
    console.log(`${this.sound}! I'm a ${this.color} ${this.type} named ${this.name}.`)
  }
}

class Mamal extends Animal {
  constructor (name, type, color, sound) {
    super (name, type, color)
    this.sound = sound
  }
}

const mamal1 = new Mamal('Gerty', 'cow', 'brown', 'Moo')
mamal1.introduce()
