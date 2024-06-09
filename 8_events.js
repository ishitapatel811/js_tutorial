// events = change in the state of an object is known as an event
// events are fired to notify code of "interesting changes" that may affect code execution
// mouse, keyboard, form, print events....
// js handle >>> inline handle

/*let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("u r inside div");
}   */


// event object = special object that has details about the event
// all event handlers have access to the Event Object's properties and methods

/*let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}  */



// Event Listener = node.addEventListener(event,callback)
/*let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",(evt) =>{
    console.log("btn1 was clicked");
    console.log(evt);
    console.log(evt.type);
})
btn1.addEventListener("click",() =>{
    console.log("btn1 was clicked-handler2");
})

const handler3 = () =>{
    console.log("btn1 was clicked-handler2");
};
btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);  */


// practice = create toggle button that changes screen to dark mode when clicked & light mode when clicked again
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",() =>{
   if(currmode === "light"){
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }
   else{
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currmode);
});
