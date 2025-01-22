let myDate = new Date();
console.log(myDate);   // 2025-01-21T13:22:43.218Z

console.log(myDate.toString());   // Tue Jan 21 2025 13:26:27 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());  // Tue Jan 21 2025

console.log(myDate.toLocaleString()); // 1/21/2025, 1:28:15 PM

console.log(typeof myDate) //object

// .to declare specific data
let createDate = new Date(2025, 0, 23);  /// date starts from 0
console.log(createDate) // 2025-01-23T00:00:00.000Z

let createDate1 = new Date(2025, 0, 23, 5, 3);
console.log(createDate1.toLocaleString()) // 1/23/2025, 5:03:00 AM

// yyy-mm-dd
let date1 = new Date("2025-01-21")
console.log(date1.toLocaleString());  // 1/21/2025, 12:00:00 AM

// dd-mm-yyyy
let date2 = new Date("01-21-2025")
console.log(date2.toLocaleString());  // 1/21/2025, 12:00:00 AM

/////Timestamp/////

let timeStp = Date.now();
console.log(timeStp)   //// 1737466555402  give time in milisec not readable

// CAN GET milisec time from date as well using getTime()
console.log(myDate.getTime())// 1737466646992

// convert date in second
console.log(Date.now()/1000) // 1737466698.972 // gives in decimal
// remove decimal using floor
console.log(Math.floor(Date.now())) // 1737466783821

// More methods of Date

let newDat= new Date();
console.log(newDat) // 2025-01-21T13:40:40.943Z

//getDate
console.log(newDat.getDate()); // 21

// getDay
console.log(newDat.getDay())// 2 (Tuesday so 2)

// getMonth
console.log(newDat.getMonth())// 0  ( 0 is for January)

// toPrint Complex date
console.log(`${newDat.getDate()}`) /// 22

console.log(newDat.toLocaleDateString('default', {
    weekday: "long",
    month:"long"
})) // January Wednesday




