// Function :

// A javascript function is a particular code designed to perform a speticular task .

// -------------------------------Or-------------------------------------------

// A function in javascript is similar to a procedure - a set of statements that performs a task or calculates a value but for a procedure to qualify as a function ,
// it should take some input and return an output where there is some obvious relationship between input ad output .

// Syntax :

// A javascript function is defined with the function keyword ,  followed by the name , followed by paranthesis ().
// A function name can contain letters , digits , underscore and dollar sign (same rule as variable) . 
// The paranthesis may include parameters name seperated by commas ( parameter1 , parameter2 , ...)
// The code to be executed by function is placed inside the curly bracket { }

function name(parameter1,parameter2,parameter3){
    // Code to be executed
}

// Function Definition :

// A function definition ( aslo called function declaration , or function statements ) consists of the function keyword followed by :

// The name of the function .
// The list of the parameters to the function , enclosed in paranthesis and seperated by commas . 
// The javascript statement thats define a function enclosed in curly braces . { /*--- */}

// Example :

// let number = 4;

function square(number){
    return number * number;
}

console.log(`The square of 4 is , ${square(4)}`); // Outputs : 16

// Alert :
alert("Please check detail in Console !")

