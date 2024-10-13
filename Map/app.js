// Map : 

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.

// Syntax :

// array.map(callback(currentValue, index, array), thisArg)

// Example :

const numbers = [4 , 9 , 16 , 25];
document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);

// Output : [2, 3, 4, 5]

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.

// More Example : 

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Output : 1

map1.set('a',97);
console.log(map1.get('a'));
// Output : 97

console.log(map1.size);
// Output : 3

map1.delete('b');
console.log(map1.size);
// Output : 2
