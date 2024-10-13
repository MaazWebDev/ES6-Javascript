// Filter :

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.

// Example :

const ages = [32 , 33 , 16 , 10 , 40];
document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age){
    return age >= 18;
}

// Output : 32, 33, 40

// The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array,
// and constructs a new array of all the values for which callbackFn returns a truthy value.
// Array elements which do not pass the callbackFn test are not included in the new array.

// More Example : 

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);

console.log(result);
// Output : ["exuberant", "destruction", "present"]