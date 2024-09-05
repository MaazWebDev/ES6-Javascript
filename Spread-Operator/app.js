// Spread Operator :

// Spread operator is used to make a copy of non-premitive data in javascript , such as objects and arrays .

// ------------Or--------------

// The spread operator (...) expands an iterable (like an array) into more elements 

// Example :

// Spread Operator in Arrays : Assign the first and second items from numbers to variables and put the rest in an array .

const numberOne = [1,2,3];
const numberTwo = [4,5,6];
const numberCombined = [...numberOne,...numberTwo]

console.log(numberCombined); // Output : [1,2,3,4,5,6]

const numbers = [1, 2, 3, 4, 5, 6];

// The spread operator is often used to extract only what's needed from an array .

const [one, two, ...rest] = numbers;

console.log(one, two, rest); // Output : 1 2 [3, 4, 5, 6]

// Example :

// Spread Operator in Objects : Assign the properties of obj1 to obj2.

const myVehicle = {
    make : 'toyota',
    model : 'Camry',
    color : 'red'
}

const updatedVehicle ={
    type : 'car',
    year : 2020,
    color : 'blue'
}

const newVehicle = {...myVehicle,...updatedVehicle}

console.log(newVehicle); // Output : { make: 'toyota', model: 'Camry', color: 'blue', type: 'car', year: 2020 }

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.

// Note : The spread operator allow us quickly to copy all or parts of an existing array into another array .

// Alert :
alert("Please check detail in Console !")

