// 🔍 Think of it like this:
// HTML file (index3.html) is a blueprint.

// When the browser loads the file, it creates a live DOM.

// JavaScript modifies that live DOM, not the actual .html file.





// get attributes
console.log(document.querySelector(".exp").getAttribute("class"));
console.log(document.querySelector("img").getAttribute("src"));

// set attributes
document.querySelector(".exp").setAttribute("class", "newClass");

var x = document.querySelector("img");
x.setAttribute("width", "100");
x.setAttribute("height", "100");

// select 2nd <div> and set its class to "demo"
var x = document.querySelectorAll("div");
x.setAttribute("class", "demo");
