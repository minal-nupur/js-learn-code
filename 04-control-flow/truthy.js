// truthy and falsy

const userEmail = "12@gmail.com";

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Dont have email")
}
// o/p
//Got User Email

/// falsy value 
// false, 0,-0, BigInt 0n, "", null, undefined, Nan

//truthy value
// "0", "false", 'false', " ", [], {} (symbol of object), function(){}

// e.g 1

const abc =[];
if(abc.length===0){
    console.log("Array is empty");
}
// Array is empty

const emptyObject ={};

if(Object.keys(emptyObject).length===0){
    console.log("Object is empty");
}
// Object is empty

// some excepation cases:
// false ==0
// false == ''
// 0==''

// Nullish Coalescing Operator::(??)
// for null and undefined value coming - to handle it

let val1;
let val2;
let val3;

val1 = 5??10;
console.log(val1) // 5

val2 = null??10
console.log(val2) // 10

val3 = undefined??10
console.log(val3) // 10

val2 = null??undefined
console.log(val2) // undefined

val2 = undefined??null
console.log(val2) // null

val2 = undefined??null??18
console.log(val2) // 18


// Terniary Operator

//syntex
//condition ?true: false

const iceTeaPrice =101;

iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 100")
// greater than 100