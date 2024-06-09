// Classes & Objects
// Object = it is an entity having state and behavior(properties and methods).
// objects have a special property called Prototype..set it using __proto__
/* const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};
const karan ={
    salary: 50000
};
karan.__proto__ = employee;  */


// Classes = program code template for creating objects.
// those objects will have state(variable)& some behaviour(function) inside it.
/*class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus"); */


// Constructor() method= automatically invoked by new, initializes object
/*class ToyotaCar{
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner");
let lexus = new ToyotaCar("lexus");  */



// Inheritance = it is passing down properties & methods from parent class to child class.
// Method Overriding = if child& parent have same method,child's method will be used.
/* class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("nothing");
    }
}
class Engineer extends Person{
    work(){
        console.log("solve problem");
    }
}
let ishitaObj = new Engineer();  */


// Super KeyWord = it is used to call constructor of its parent class to access the parent's
// properties & methods.
/* class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    constructor(name){
        super();  // to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("solve problem");
    }
}
let engObj = new Engineer("ishita");  */



// practice = create class user with 2 properties,name,email. it has method called 
// viewData() that allows user to view website data.

// practice = create new class called Admin which inherits from User.Add new method called
// editData to admin that allows it to edit website data.

/*let DATA = "information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data=",DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "new value"
    }
}
let stu1 = new User("ishita","ish@gmail.com");
let std2 = new User("radhe","rp@gmail.com");
let admin1 = new Admin("admin","ad@clg.com");  */



// Error Handling = try-catch
/*let a= 5;
let b = 10;
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);   // error
} catch(err){
    console.log(err);
}  */


/*let a = prompt("enter 1st number")
let b = prompt("enter 2nd number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

function main(){
    let x = 1;
    try {
        console.log("sum = ",sum*x)
        return true
    } catch (error) {
        console.log("ERROR")
        return false
    }
    finally{
        console.log("files are being closed")
    }
}
let c = main() */