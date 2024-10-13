// Call-Back-Function  :

//  A call back is a function passed as an argument to another function .
//  This technique allows a function to call another function .
//  A call back function can run after another function has finished .

// Example of Call-Back-Function :

// Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback),
// and let the calculator function run the callback after the calculation is finished:

function myDisplayer(something){
    document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1 , num2 , myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(10,10,myDisplayer);

// There are two ways in which the callback may be called: synchronous and asynchronous. 
// Synchronous callbacks are called immediately after the invocation of the outer function, with no intervening asynchronous tasks,
// while asynchronous callbacks are called at some point later, after an asynchronous operation has completed.

