// functions = block of code performs specific task, can be invoked whenever needed
/*function myFunction(msg){     // parameter = input
    console.log(msg);
    console.log("radhe");
}
myFunction("js");   */   //argument


// function = sum of 2num
/*function sum(x,y){     // parameters are local variable = block scope
    // console.log(x+y);
    sum = x+y;
    return sum;
}
let val = sum(5,5);
console.log(val);  */


// Arrow function => compact way of writing function
// const arrowSum = (a,b) => {
//     console.log(a+b);
// };


// practice = create function that takes string as argument & returns number of vowels
/*function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}

// same task with Arrow function
const countVow = (str) => {
        let count = 0;
        for(const char of str){
            if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
                count++;
            }
        }
        return count;
    }  */


// forEach loop in Arrays (Higher Order function/method) = arr.forEach(callBackFunction)
// callbackFunction = it is function to execute for each element in the array
// callback is a function passed as an argument to another function
/*let arr = ["pune","delhi","mumbai"];
arr.forEach((val,idx, arr) =>{
    console.log(val.toUpperCase(),idx, arr);
});  */



// practice = given array of number, print the square of each value using forEach loop
/*let nums = [2,3,4,5,6];
nums.forEach((num) => {
    console.log(num * num);   //num**2
});   */


// Map = create a new array with results of some operation
/*let nums = [67,52,39];
let newArr = nums.map((val) =>{
    return val*2;
});
console.log(newArr);  */


// filter = create a new array of element that give true for a condition/filter
/*let arr = [1,2,3,4,5,6,7];
let evenArr = arr.filter((val) =>{
    return val % 2 === 0;
});
console.log(evenArr);  */


// reduce = perform operation & reduce the array to a single value and return single value
/*let arr = [1,2,3,4];
const output = arr.reduce((res, curr) =>{
    return res + curr;         // result + current
});
console.log(output);  

// largest
let arr = [5,6,3,2,1];
const output = arr.reduce((prev, curr) =>{
    return prev > curr ? prev : curr;
});
console.log(output);  */



// practice = given array of marks of students.filter out of marks of student that scored 90+.
/*let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter((val) =>{
    return val>90;
});
console.log(toppers);   */


// take nums input. create array of num from 1 to n.use reduce to calculate sum of all numbers in array.
// use reduce to calculate product of all nums in the array
/*let n = prompt("enter num:");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;     // 1(0),2(1),3(2),4(3)
}
console.log(arr);

let sum = arr.reduce((res,curr) =>{
    return res + curr;
});
console.log(sum);

let factorial = arr.reduce((res,curr) =>{
    return res * curr;
});
console.log(factorial);  */