// DOM = when a web page is loaded, the browser creates a Document Object Modal of the page
// window(obj) -> document(obj) -> html -> body -> script
// console.dir -> document ki properties and methods print krta hai
// its used for dynamically(runtime) changes.
// console.dir(window.document.body.style.background="green");

// selecting with #id
/*let headings = document.getElementById("headings");
console.dir(headings);   */

// selecting with .class  (html collection)
/*let heading = document.getElementsByClassName("heading");
console.dir(heading); */

// selecting with tag
/*let parahs = document.getElementsByTagName("p");
console.dir(parahs);  */

// query selector
/*let firstEl = document.querySelector("p");
console.dir(firstEl);
let allEl = document.querySelectorAll("p");
console.dir(allEl);  */



// DOM manipulation
// tagName: returns tag for element nodes
/*let firstEl = document.querySelector("#headings");
console.dir(firstEl);  */

// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or html content in the element
/*let div = document.querySelector("div");
console.dir(div); */

// textContent: returns textual content even for hidden elements
/*let div = document.querySelector("div");
console.dir(div);
let heading = document.querySelector("h1");  */



// practice = create h2 heading with text-"hello js".append "from apna clg" to this text using js.
/*let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from apna clg student";  */


// create 3 div with common class name-"box".access them&add some unique text to each of them.
/*let divs = document.querySelectorAll(".box");

let idx=1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}; */



// attributes
// getAttributes(attr) = to get attributes value
/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);  */


// setAttributes(attr,value) = to set attributes value
/*let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass")); */


// style = node.style
/*let div = document.querySelector("div");
div.style.backgroundColor = "red";
div.style.fontSize = "25px";
div.innerText = "hello";  */



// insert elements
// node.append(el) = adds at the end of node(inside)
/*let newBtn = document.createElement("button");
newBtn.innerText = "click";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);  */


// node.prepend(el) = adds at the start of node(inside)
/*let newBtn = document.createElement("button");
newBtn.innerText = "click";
console.log(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);  

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi, i m new</i>";

document.querySelector("body").prepend(newHeading); */


// node.before(el) = adds before the node(outside)
/*let newBtn = document.createElement("button");
newBtn.innerText = "click";
console.log(newBtn);

let div = document.querySelector("div");
div.before(newBtn);  */


// node.after(el) = adds after the node(outside)
/*let newBtn = document.createElement("button");
newBtn.innerText = "click";
console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);  */


// node.remove() = removes the node
/*let para = document.querySelector("p");
para.remove();  */



// practice = create btn(click me),bg color red,text color white. 
// insert btn as the 1st element inside body tag.
/*let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);  */


// create <p> tag in html,give it class & some styling.
// now create new class in css& try to append this class to the p element.
// how you overwrite the class name when you add a new one? solve using classList. 
/* let para = document.querySelector("p");
para.classList.add("newClass");   // to add 2 class  */
