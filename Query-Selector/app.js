// Query Selector :

// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.
// Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

// Example :

document.querySelector("p").style.backgroundColor = "red";

// The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. 
// If no matches are found, null is returned.

// Query Selector All :

// The querySelectorAll() method returns all elements that matches a CSS selector(s).
// The querySelectorAll() method returns a NodeList.
// The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid

// Example :

const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}