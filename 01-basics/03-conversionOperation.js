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

// console.log(typeof numString); //string
// console.log(numString); // 33

//*********Operation************* */

let value = 2;
let negVal = -value;
// console.log(negVal); //-2

// console.log(2%3); // 2
// console.log(2/3);  //0.6666666666666666

let str1 = "Hellow"
let str2 = " Minal"

// console.log(str1 +str2);  //Hellow Minal

// console.log("1" + 2);  //12
// console.log(1+"2"); //12
// console.log("1" +2+2); //122
// console.log(1+2+"2");//32
// console.log((3+2)*5%3); //1 // use paranthese for multiple operation. // not good practise to work on

console.log(true)  //true
console.log(+true);  // 1// because true is also 1 and we cannot add anything in boolean so o/p 1
//console.log(true+); //SyntaxError: Unexpected token ')'
console.log(+"");  // 0 //bad practise

let num1, num2, num3
 
num1=num2=num3 = 2+2 //not good for readability
console.log(num1)  // o/p 4, but not good for readability

let gameCounte = 100;
gameCounte++;
console.log(gameCounte); //101 

let gameCounte1 = 100;
++gameCounte1;
console.log(gameCounte1); //101

//prefix postfix

let x=3;
const y= x++;
console.log(`x : ${x}, y : ${y}`); //x : 4, y : 3

let a= 2;
const b = ++a;
console.log(`a:${a}, b:${b}`);  // a:3, b:3

//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//perfix postfix MDN




