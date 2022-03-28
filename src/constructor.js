
const person = function (living, age, gender) {
  this.living = living
  this.age = age
  this.gender = gender
  this.getGender = function () { return this.gender }
}
const smith = new person(true, 33, 'male')
console.log(smith)

const myNumber = new Number(23)
const myString = new String('male')
const myBoolean = new Boolean(false)
const myObject = new Object()
const myArray = new Array('foo', 'bar')
const myFunction = new Date()
const myRegExp = new RegExp('\bt[a-z]+\b')
const myError = new Error('Sorry')
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myBoolean.constructor)
console.log(myObject.constructor)
console.log(myArray.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)
