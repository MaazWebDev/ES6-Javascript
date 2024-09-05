// Events :

// Events are a way to communicate between different parts of your program. They allow one part to trigger an action, and another part to respond to that action.

// -------------------------------Or -------------------------------------------

// A javascript can be executed when an event occurs , like when a user click on a Html element

// onclick=JavaScript

// Example of html events :

// When a user click a mouse , When a user hover a mouse on element , when a web page has loaded , when a image has been loaded

function changeText(id) {
    id.innerHTML = "Ooops!";
  }

// Example of event using html DOM :


document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// Event Listner :

// Event listeners are a more modern way to handle events in JavaScript. They allow you to attach multiple event listeners to the same element, and they are automatically removed when the element is removed from the DOM.

// ------------------------------------Or---------------------------------

// The addEventListner() method attaches an event handler to the specified element
// The addEventListner() method makes it easier to control how the events react to bubbling
// The addEventListner() method attaches an event handler to an element without overwriting existing evnt handler

// Syntax :
 
// element.addEventListener(event, function, useCapture);

// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Example of event listener :

const btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random()* (number + 1));
}
btn.addEventListener("click" , () =>{
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
})