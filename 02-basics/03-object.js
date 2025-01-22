// object create using constructor create Singlton object
//Object.create();

// create object using literals doesn't create Singlton object

// Object creation using Literals:
const jsuser = {
    name : "minal",
    age: 26,
    location: "karnataka",
    email: "min@gmail.com",
    isLoggedIn: false,
    workingDay: ["Monday", "Saturday"]
}

console.log(jsuser.email) // min@gmail.com
// also
console.log(jsuser["email"]) // min@gmail.com

// above each key like -- name, age etc are written as not elemet but inside it is taken as String
// but in some of the cases we cannot access using dot operator like in
//  "full name": "minal nupur" below

const jsuser1 = {
    name : "minal",
    "full name": "minal nupur",
    age: 26,
    location: "karnataka",
    email: "min@gmail.com",
    isLoggedIn: false,
    workingDay: ["Monday", "Saturday"]
}

//console.log(jsuser.full name) // not correct

console.log(jsuser1["full name"]) // minal nupur

// add a symbol as key in onject

const mySym = Symbol("key1");

const jsuser2 = {
    name : "minal",
    "full name": "minal nupur",
    [mySym] : "mySyabolePrint",
    age: 26,
    location: "karnataka",
    email: "min@gmail.com",
    isLoggedIn: false,
    workingDay: ["Monday", "Saturday"]
}

console.log(jsuser2[mySym]) // mySyabolePrint
console.log(jsuser2) 
//o/p 
/**
 * {
  name: 'minal',
  'full name': 'minal nupur',
  age: 26,
  location: 'karnataka',
  email: 'min@gmail.com',
  isLoggedIn: false,
  workingDay: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mySyabolePrint'
}
 * 
 */

console.log(typeof mySym) // symbol
console.log(typeof jsuser["email"])  // string

// change the value in object 

jsuser.email = "123@gmail"
console.log(jsuser["email"]) //123@gmail
console.log(jsuser) 
// o/p
/**{
  name: 'minal',
  age: 26,
  location: 'karnataka',
  email: '123@gmail',
  isLoggedIn: false,
  workingDay: [ 'Monday', 'Saturday' ]
} */

// freeze the value in  object

Object.freeze(jsuser);

jsuser.email = "erf@gmail.com"
console.log(jsuser["email"]) // 123@gmail doestn't change as it is freezed
console.log(jsuser) //
//o/p
/** {
  name: 'minal',
  age: 26,
  location: 'karnataka',
  email: '123@gmail',
  isLoggedIn: false,
  workingDay: [ 'Monday', 'Saturday' ]
}*/



//////////Function

jsuser2.greeting = function(){
    console.log("Hello user");
}
console.log(jsuser2.greeting)  // [Function (anonymous)]  // have to use greeting as function
console.log(jsuser2.greeting())  // Hello user
                                 //undefined

// use same object like jsuser2's key value in function

jsuser2.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(jsuser2.greetingTwo())//Hello user, minal
                                 // //undefined
