// In javsScript , some function has to be called at the time of function declaration , In this scenerio an expression is formed which is known as "Immediately Inovake Function Expession".

// IIFE (Immediately Invoked Function Expression) :

// Immediately Invoked Function Expression (IIFE) is a function that is defined and immediately invoked. It's a shorthand for creating a function and immediately invoking it.

// ---------------Or-----------

// Immediately Invoked Function Expression (IIFE) in Javasript is a function that runs as soon as it is defined .

// Syntax for normal function is :

(
    function addNumber(num1,num2){
        console.log(num1 + num2);
    }
)(12,22); // Inovaked at the time of decalaration

// Syntax for arrow function is :


    const sum = ((num1,num2) =>{
        console.log(num1 + num2);
    }
)(10,22);  // Inovaked at the time of decalaration

// Alert :
alert("Please check detail in Console !")