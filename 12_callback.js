// async await >> promise chains >> callback hell

// Synchronous = code runs in a particular sequence of instructions given in program.
// Asynchronous = sometimes imp instructions get blocked due to some previous instructions,
// which causes delay in the UI
// it code execution allows to execute next instructions immediately and doesn't block the flow. 

/*setTimeout(() =>{
    console.log("hello");
},2000);        // 2sec = 2000ms  */


// Callbacks = it is a function passed as an argument to another function.
/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);  */


// Callback Hell = Nested callbacks stacked below one another forming pyramid structure.
/*function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,() => {
    getData(2,() => {
        getData(3,() =>{
            getData(4);
        });
    });
});   */



// Promises = it is for "eventual" completion of task.object in js.solution to callback hell.
/*let promise = new Promise((resolve,reject) => {
    console.log("i m promise");
    // resolve(123);
    reject("err");
});  

function getData(dataId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}      */




// Async-Await = Async function always returns a promise
// Await pauses the execution of its surrounding async function until the promise is settled.

// IIFE = Immediately Invoked Function Expression
// that is called immediately as soon as it is defined.
