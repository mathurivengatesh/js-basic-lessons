/* eslint-disable semi */
// const age = 100;
// const money = 1000.50
// console.log(typeof age);// number
// console.log(typeof money);// number

// math helper methods:

// console.log(Math.round(2.5));
// console.log(Math.floor(2.4));
// console.log(Math.ceil(8.4));
// console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachkidGets = Math.floor(sweets / kids);
console.log(eachkidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

const x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

console.log(0.1 + 0.2);
// let costof product = 100.95;
const costofproduct = 10095;// inpaise

// console.log(typeof Infinity);
// console.log(typeof -Infinity);
const result = 10 / 'hello';
console.log(typeof NaN);

//check the datatype of a value 
let x = 100;
let result = Number.isInteger(x);
console.log(`Is x a number: ${result}`);
let y ="abcd";
result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);
result = (type y ==='string');
console.log(`Is y a String: ${result}`);
let flag = true;
result = (type flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);
let nos = [1,2,3,4,5];//object
result = (type nos === 'object');
console.log(`Is nos an object: ${result}`);

