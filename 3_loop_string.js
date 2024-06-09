// For loop
/*
for(let i = 1; i <= 5; i++){
    console.log("ish");
}

let sum = 0;
for(let i = 1; i<=5;i++){
    sum = sum +i;
}
console.log("sum =",sum);  */


// while loop
/*let i =1;
while(i<=5){
    console.log("i =",i);
    i++;
}  */


// do while loop
/* let i = 1;
do{
    console.log("i =",i);
    i++;
} while(i<= 10);  */


// for of loop
/*let str = "ish";
let size = 0;
for(let i of str){    // iterator -> characters
    console.log(i);
    size++;
}
console.log("string size=",size); */


// for in loop
/*let student = {
    name: "ish",
    age : 20,
    cgpa : 7,
    isPass : true
};
for(let key in student){
    console.log("key =",key,"value =",student[key]);
}  */


// practice = print all even number from 0 to 100
/*for(i = 0;i<=100; i++){
    if(i % 2===0){
    console.log(i);
    }
}  */


// practice = create game where you start with random num. ask user to keep guess the num
            //   until user enter correct num
/* 
let gameNum = 25;
let userNum = prompt("guess the game number:");

while(userNum != gameNum){
    userNum = prompt("wrong num..guess again:");
}
console.log("you r right....");  */



// strings = sequence of characters used to represent text  (immutable = can't change)
// let str = "ish";
// console.log(str[1]);   // string indices


// template literals = way to have embedded expression in strings
// string interpolation = to create strings by doing substitution of placeholders
/*
let specialString = `this is template literals`;
console.log(typeof specialString);

let obj = {
    item: "pen",
    price : 10
};
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);
console.log("the cost of",obj.item, "is", obj.price);  */


// Escape character
//    \n -> new line     \t -> tab space    length = 1


// string methods = built in function to manipulate string
// str.toUpperCase()     str.toLowerCase()     str.trim() remove whitespace
// let str = "ApnaCollege";
// let newStr = str.toUpperCase();
// console.log(newStr);

// str.slice(start,end?) / returns part of string
// let str1 = "01234567";
// console.log(str1.slice(0,3));

// str1.concat(str2) / joins str2 with str 1
// let str2 = "apna";
// let str3 = "college";
// console.log(str2.concat(str3));

// str.replace(searchVal, newVal)
// let string = "hello";
// console.log(string.replace("h","y"));

// str.charAt(idx)
// let str4 = "ishita";
// console.log(str4.charAt(4));



// practice = prompt a user full name and generate user name based on input
// start with @, follow full name, end with full name length

// let fullName = prompt("enter full name without space:");

// let userName = "@" + fullName + fullName.length;
// console.log(userName);
