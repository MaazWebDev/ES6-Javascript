// Switch :

// The switch statement is used to perform different action based on different conditions .

// ---------------Or--------------

// The switch statement evaluate an expression , matching the expression's value against a series of case clauses , and executes the statement after the first case clause with a matching value ,
// until a break statement is encountered . The default clause of a switch statement will be jumped to if no case matches the expression value .

// Syntax :

let expression = 'value1'; // Example Expression

switch(expression){
    case 'value1':
         // code block
        break;
    case 'value2':
         // code block
        break;
    default:
         // code block
}

// Use the switch statement to select the one of many code blocks to be executed .

// Example :

let fruits = 'Grapes';

switch(fruits){
    case 'Apple':
    console.log("Apples are $1.00 a pound .");
    break;
    case 'Bananas':
    console.log("Bananas are $2.00 a pound .");
    break; 
    case 'Mangoes':
    console.log("Mangoes are $3.00 a pound .");
    break; 
    case 'Papaya':
    case 'Guava':
    console.log("Papaya and Guava are $4.00 a pound .");
    break; 
    case 'Grapes':
    console.log("Grapes are $5.00 a pound .");
    break; 
    default:
    console.log(`Sorry , We are out of ${fruits} .`);   // This will be executed if there is no case match.
}
console.log("Is there anything else you'd like ?");

// Output : Grapes are $4.00 a pound.

// Another Example :

let day;

switch(new Date().getDay()){
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
}
document.getElementById("demo").innerHTML = " Today is " + day;

// Alert :
alert("Please check detail in Console !")