const score = 100;
console.log(score) // 100

// Expelicitly make a number:
const blance = new Number(100)
console.log(blance); // [Number: 100]

///using multiple method od number
//toString()
console.log(blance.toString()); // 100

// coverted to toString can use Stirng maethods as well like length

console.log(blance.toString().length); //3

//toFixed() // use to show fixed value after descimal
console.log(blance.toFixed(2)); // 100.00

// toPrecision= it gives all total fixed value
console.log(blance.toPrecision(2));  // 1.0e+2  // if value of given number is more then the mentioned
// one so it will print the nunber till required after that it will add e+2
// like here 100 is the number required till 2 so o/p 1.0e+2 

const pr= 29.8990;
console.log(pr.toPrecision(3));   // 29.9

const pr1 = 12345.789
console.log(pr1.toPrecision(3)) //1.23e+4

//toLocaleString()  use to convert long didt in proper commas
const hundreds = 1000000;
console.log(hundreds.toLocaleString())  // 1,000,000
// Default provide American way
// for indian way
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000


// Math
console.log(Math)// Object [Math] {}

// there are several methods of Maths

//abs : give absolute valus if nrgativr convert it into positive

console.log(Math.abs(-4));//4

// round() : give round of value if number
console.log(Math.round(6.4)) // 6

// ceil // round the highest valse
console.log(Math.round(4.2)); 4
console.log(Math.round(4.9)); 5

// floor() : give lowest value
console.log(Math.floor(4.9)); // 4

// random() // give the random value from 0 to 1

console.log(Math.random()) // 0.32395766472611265
// to give value at least 1 not let then 1
console.log(Math.random()*10) // 7.6176439174470945
console.log((Math.random()*10) +1) // 4.163992698651765
// use floor to print highest num 
console.log(Math.floor(Math.random() * 10) +1) // 6

// take num with some range like (10 20)
const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min) // 16






