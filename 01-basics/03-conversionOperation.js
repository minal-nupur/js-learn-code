let score = "33"

// console.log(typeof score);  //String
// console.log(score); //33

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //33

let scrore1 = "33abc"
let valueInNumber1 = Number(scrore1)

// console.log(typeof valueInNumber1); //number
// console.log(valueInNumber1);  // NaN

let scoreNull = null
let valueInNumberNull = Number(scoreNull)  

// console.log(typeof valueInNumberNull); //number
// console.log(valueInNumberNull) //0

let scroreUndefined = undefined
let valueInNumberUndef = Number(scroreUndefined)

// console.log(typeof valueInNumberUndef); //number
// console.log(valueInNumberUndef)  //NaN

let scoreBln = true
let valueInNumberBln = Number(scoreBln)

// console.log(typeof valueInNumberBln); //number
// console.log(valueInNumberBln); // 1

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn); // boolean
// console.log(booleanIsLoggedIn) // true

let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)

// console.log(typeof booleanIsLoggedIn1); // boolean
// console.log(booleanIsLoggedIn1) // false as empty string

let isLoggedIn2 = "Minal"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

// console.log(typeof booleanIsLoggedIn2); // boolean
// console.log(booleanIsLoggedIn2) // true as not empty string

let someNumber = 33

let numString = String(someNumber)

console.log(typeof numString); //string
console.log(numString); // 33


