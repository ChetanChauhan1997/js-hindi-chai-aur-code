// Primitive Data Type (7)

// 1. String
// 2. Number
// 3. Boolean
// 4. Null 
// 5. undefined
// 6. Symbol
// 7. BigInt

const myName = "String";
const score = 43;
const isNotIn = true;
let temprature = null;
let userEmail ;

const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID);

const bigNumber = 2432141242314244n;


// console.log(typeof myName);
// console.log(typeof score);
// console.log(typeof isNotIn);
// console.log(typeof temprature); 
// console.log(typeof userEmail);
// console.log(typeof bigNumber);
// console.log(typeof anotherID);



// Non Primitive Data Type  (Reference Type)

// 1. Array 
// 2. Object
// 3. Function 


const heros = ['Shaktiman','naagraj','doga']
let myObj = {
    name:"Shiva",
    age: 27,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

