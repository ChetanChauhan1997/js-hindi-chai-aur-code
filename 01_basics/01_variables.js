const accoundId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accoundState; //undefined

//accoundId = 2 // not allowed 
accountEmail = "hc@gc.com"
accountPassword = "34344"
accountCity = "jaipur"

// console.log(accoundId);

/* 
prefer not to use var beacause of issue in block scope and functional scope
*/

// to console many variables in table format we use it :-
console.table([accountEmail,accountPassword,accountCity,accoundState]);


// revision

let username ="shiva";
const AadharNo = 501966234722;
var email = "shiva@dev.com";

 console.table([username, AadharNo]);



