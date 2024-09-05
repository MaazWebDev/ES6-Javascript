// Turnary Operator : 

// The turnary operator is the only javascript operator that makes three operands . a condition followed by a question  mark (?) ,
// then an expression to execute if the condition is truth followed by a colon (;) ,
// and finally the expression to execute if the condition is false . This operator is frequently used as an alernative to an if...else statement .

// ---------------------Or---------------------

// The turnary operator is a simplified conditional operator like if / else .

// Syntax ;

// condition ? <expression if true> : <expression if false>

// Example :

function getFee(isMember) {
    return isMember ? '$10.00' : '$12.00';
}

console.log(getFee(true)); // Outputs : $10.00

console.log(getFee(false)); // Outputs : $12.00

 console.log(getFee(null)); // Outputs : $12.00

// Simple Example :

const age = 20 ;
const beverage = age >= 18 ? 'Beer' : 'Juice';
console.log(beverage) // Outputs : 'Beer'

// More Example From If Else Statment :

function renderApp(){
console.log("Welcome !")
}

function renderLogin(){
    console.log("Please Login First!")
}

let authenticated = true ;
 if(authenticated){
    renderApp()
 }else{
    renderLogin()
 } // Outputs : "Welcome !"

 // Above example Using Ternary Operator :

 function renderApp(){
    console.log("Welcome !")
    }
    
    function renderLogin(){
        console.log("Please Login First!")
    }
    
    let IsAuthenticated = false ;

    IsAuthenticated ? renderApp() : renderLogin() // Outputs : "Please login first !"

    // Alert :
    alert("Please check detail in Console !")