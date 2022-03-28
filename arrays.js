const names = ['John','Sam','Peter'];

console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

// ---methods of array--------
names.push('Suresh');
console.log('After push:' + names);
// push will add the item the end
// ... is called as the spread operator
// it represents the entire items in the array

const names2 = [...names, 'Raj'];
console.log('names2: ' + names2);

names.unshift('poppy');
console.log('unshift:' + names);
// unshift:
// it adds data to the beginning.so, the index
// no of the rest of the values will change now.

const names3 = ['raj', ...names];
console.log(names3);
// this will add data at the beginning

//------slice()-----
const phones = ['samsung','readmi','iphone','nokia','oppo','pocco'];
const b1 = [...phones.slice(0, 2)];
console.log(b1);
// slice takes 2 parameters(from,to)
// it has copied 2 values from index 0 and assigned to b1

const b2 = [...phones.slice(3)];
console.log(b2);
// brings the value from the given index no 

const newPhones = [
    ...phones.slice(0, 2),
    'vivo',
    ...phones.slice(2)
];
console.log('newPhones: ' + newPhones);
// a new array called newphones is created.
//then in index 0 and 1 values from bikes is copied using the slice
//(0,2) method. the first 2 values are copied,
// i the  2nd index value 'benotto' is pushed,
// then from the third index again values from bikes is copied using
// slice(2)- the last 2 values from the 2 index of phones are copied.
const newPhones2 = [
    ...phones.slice(0, 3),
    ...phones.slice(4)
];
console.log('newPhones2: ' + newPhones2);

const indexOfSam = names.findIndex(names => names === 'Sam');
console.log('indexOfSam: ' + indexOfSam);
// func to delete a name from the array
function deleteName(name) {
const indexOfname = names.findIndex(names => names === name);
const newnames = [...names.slice(0,indexOfname),...names.slice(indexOfname)];
console.log(newnames);
}
deleteName('John')

// -----splice()---
const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);
//numbers.splice(3, 2); // from the 3rd index delete the next 2 values
//console.log(numbers);
const pizzaSlice = numbers.slice(2, 4);
console.log('pizzaSlice:' + pizzaSlice);
console.log('Original Numbers:' + numbers);
// ----reverse-----
//mutable
numbers.reverse();
console.log(numbers);
//immutable
const numrev = [...numbers.reverse()];
console.log(numrev);
console.log(numbers);


