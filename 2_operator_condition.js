// operators :- arithmetic  + - * / %(modulus) **(exponentiation) 
/*let a = 5;
let b = 2;
console.log("a ** b =",a ** b); */

// unary operator:- ++(increment)  --(decrement)
/* 
let a = 5;          // ++a(pre)    a++(post)
let b = 2;
a++;        // a = a+1
console.log("a =",a);
console.log("++a =",++a);
console.log("a++ = ",a++);
console.log("a = ",a); */

// assignment operator  =  +=(a=a+1)  -=  *=  /=  %=  **=
/*let a = 5;
let b = 2;
a+=4;  //a = a+4
console.log("a=",a); */

//comparison operator ==  !=  >  >=   <  <=   ===(equal to & datatype) !==(not equal to & datatype)
/*
let a = 5;          //"5"  string -> number
let b = 2;
console.log("5 == 2",a==b);
console.log("5 != 2",a!=b);  */

// logical operator :-  &&(and both true)   ||(or min 1 true)  !(not)
/*
let a = 5;
let b = 2;
let cond1 = a>b;  //true
let cond2 = a===5; //true
console.log("cond1 && cond2 =", cond1 && cond2);
let con1 = a>b;  //true
let con2 = a===2;  //false
console.log("con1 || con2 =", con1 || con2);
console.log("!(a>b) =", !(a>b));  //true   */


// Conditional statement :-  if
/*
let age = 25;
if(age >= 18){
    console.log("can vote");
}
if(age < 18){
    console.log("can't vote");
}

let mode = "dark";
let color;
if(mode === "dark"){
    color ="black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);  */


// if-else
/*
let mode = "light";
let color;
if(mode === "dark"){
    color ="black";
}
else{
    color = "white";
}
console.log(color); 

let age = 25;
if(age >= 18){
    console.log("can vote");
}
else{
    console.log("can't vote");
}  


// odd even
let num = 10;
if(num % 2 === 0){
    console.log(num, "is even");
}
else{
    console.log(num,"is odd");
}  */


// else-if
/*
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
} else if(mode === "blue"){
    color = "blue";
} else if(mode === "pink"){
    color = "pink";
} else{
    color = "white";
}
console.log(color);  */


// ternary operator   condition ? true output : false output ;
/*
let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result); */


// practice
// get user to input a number using prompt.check if number is multiple of 5 or not.
/*
let num = prompt("enter a number:");
if(num % 5 ===0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}  */


// code which can give grades to student according to scores
/*
let score = prompt("enter your score(0-100):");
if(score >= 90 && score <= 100){
    console.log("grade : A");
} else if(score >= 70 && score <= 89){
    console.log("grade : B");
} else if(score >= 60 && score <= 69){
    console.log("grade : C");
} else if(score >= 50 && score <= 59){
    console.log("grade : D");
} else if(score >= 0 && score <= 49){
    console.log("grade : F");
} else{
    console.log("enter valid score");
}  */

