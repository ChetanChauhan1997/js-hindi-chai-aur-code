const name = "hitesh";
const repoCount = 20;

// console.log(name + repoCount + " Value");

// new way to describe 

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Shiva-singh-chauhan');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// Length of string
// console.log(gameName.length);

// toUpperCase

// console.log(gameName.toUpperCase());

// to know the character on any position
// console.log(gameName.charAt(2));

// to know the position of any character inside string 
// console.log(gameName.indexOf('h'));



const newString = gameName.substring(0,2);
// console.log(newString);


const anotherString = gameName.slice(0,2);
// console.log(anotherString);


// For Removing extra space in string
const newStringOne = "    Shiva    " ;
console.log(newStringOne);
console.log(newStringOne.trim());


// for replacing any particular charcter inside string
const url = "https://hitesh.com/hitesh%20Choudhary" ;
console.log(url.replace('%20', '-'));


// we can also find wether any charcter or word exist inside string or not by this
console.log(url.includes('hitesh'));


// split 
console.log(gameName.split('-'));








