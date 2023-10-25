// making a variable called titleEl
//  we are having that variable hold the information from the element that has the id title
// document.getElementById is a method that looks at the html and returns an element with the matching id
let titleEl = document.getElementById('title');
// console.log to check 
console.log(titleEl);
console.dir(titleEl);



// accessing an element without an id
// document.querySelector(selector)
// creating h1El variable
// get an h1 element from our document and save it in that variable
let h1El = document.querySelector("h1");
console.log(h1El);
// If the CSS selector provided to querySelector()matches multiple elements, it returns the "first" matching element.
// If no matching node is found, nullis returned.

// Practice 
// add a <p> tag and use querySelector() to access it
// let pEl = document.querySelector('p');
// console.log(pEl);

// use the class "cool" and querySelector
let pEl = document.querySelector('.cool');
console.log(pEl);


pEl.textContent = "Comments for <strong>Today</strong>";
pEl.innerHTML = "Comments for <strong>Today</strong>";

// go to your hmtl file
//  you try adding in an unordered list <ul>
//  add some <li>
// in the js file try:
// let listEl = document.querySelector("li");
// console.log(listEl);
// what did you see?

// Changing the style

