"use strict";

let score = null;
 
// console.log(typeof score); 

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); //Number 
// console.log(valueInNumber); //NaN

// Number Conversion 
// "33" => 33
// "33abce" => NaN  (Not a Number)
// ture/false => 1/0
// undefined => NaN
// null => 0


let isLoggedIn = 22;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// Boolean Conversion

// 1 => true  // 0 => false
// "shiva" => true
// "" => false
// null => false
// undefined => false


let someNumber = undefined;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// String Conversion
// 33 => "33"
// true = "true"
// null = "null"
// undefined = "undefined"


/******************  Operations         *********************** */


let value = 3 ;
let negValue = -value;
//console.log(negValue);  // -3

// console.log(2+2);  sum
// console.log(2-2);  subtracion
// console.log(2*2);  multiply
// console.log(2**2); power of 2
// console.log(2**3);  power of 3
// console.log(4/2); divide
// console.log(7%2); remainder


let str1 = "Hello"
let str2 = " Hitesh"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");  //12
console.log("1" + "2");  //12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log((3+4) * 5 % 3);  // 2
console.log( 3+ 4 * 5 % 3);  // 2


// General Tip:
//JavaScript follows operator precedence and left-to-right associativity. The order of operations is:
// To solve similar problems:

// Remember operator precedence: () > *, /, % > +, -

// Evaluate step-by-step.

// Use parentheses if needed for clarity.














