// Array = collection of multiple Data Types (objects)(mutable = can change)
/*
let marks = [97,82,92,79,89];
console.log(marks);
console.log(marks.length);  */


// Array indices
/*
let heros = ["iron","thor","hulk","shaktiman","spiderman"];
for(let i =0; i< heros.length; i++){
    console.log(heros[i]);
}

for(let hero of heros){
    console.log(hero);
}  


let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
for (let city of cities){
    console.log(city.toUpperCase());
}  */


// Practice = array with marks of student [85,97,44,37,76,60] find avg marks.
/*let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of class = ${avg}`);  */


// practice = price of 5 items [250,645,300,900,50]  all have offer of 10% OFF.change the 
// array to store final price.
/*let items = [250,645,300,900,50];

for(let i=0; i< items.length; i++ ){
    let offer = items[i] / 10;
    items[i] -= offer;
};
console.log(items);  */


// array methods = push()=add   pop()=delete   toString()=convert array to string
/*let food = ["potato","apple","litchi","tomato"];
food.push("chips","burger","paneer");
console.log(food);
food.pop();
console.log(food);

console.log(food.toString());
console.log(food); */


// concat()=joins    unshift()=add to start   shift()=delete from start
/* let m_heros =["thor","spiderman","ironman"];
let dc_heros =["superman","batman"];
let heros = m_heros.concat(dc_heros);
console.log(heros);

m_heros.unshift("ish");
console.log(m_heros);

let val = m_heros.shift();
console.log("deleted",val); 
console.log(m_heros) */


// slice()=return piece of array    splice()=change original array(add,remove,replace)
/* let m_heros =["thor","spiderman","ironman","antman"];
console.log(m_heros);
console.log(m_heros.slice(1,3));

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);   
arr.splice(2,0,101);         // add
arr.splice(3,1);              // delete
arr.splice(3,1,101);         // replace  */



// practice = remove 1st company, remove uber & add ola, add amazon at end
// let companies = ["bloomberg","microsoft","uber","google","ibm","netflix"];
// companies.shift();
// companies.splice(2,1,"ola");
// companies.push("amazon");
// console.log(companies);



/*let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}*/


let a = [1, 93, 5, 6, 88]

/*for(let index = 0; index < a.length; index++){
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, arr)=>{
    console.log(value, index, arr);
})  */


// for (const value of a) {
//     console.log(value)
// }