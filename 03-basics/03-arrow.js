// use of this//
// this use to refer the current context
// In object
//// case 1:::::::
const user = {
    userName : "minal",
    price : 99,

    welcomeMessage : function (){
        console.log(`${this.userName}, welcome`)// minal, welcome

    } 
}
user.welcomeMessage(); // minal, welcome

// case 2::::

const user1 = {
    userName : "minal",
    price : 99,

    welcomeMessage : function (){
        console.log(`${this.userName}, welcome`)// minal, welcome

    } 
}
user1.welcomeMessage(); 
user1.userName="nup"
user1.welcomeMessage(); // nup, welcome

// case 3:::: adding this inside object and outside it
console.log(`case 3:::: adding this inside object and outside it`)
const user2 = {
    userName : "minal",
    price : 99,

    welcomeMessage : function (){
        console.log(`${this.userName}, welcome`)//minal, welcome
        console.log(this); ///// inside print all current context
  // o/p:::::
//{
//   userName: 'minal',
//   price: 99,
//   welcomeMessage: [Function: welcomeMessage]
// }
   //      */

    } 
}
user2.welcomeMessage(); 
user2.userName="nup"
user2.welcomeMessage(); // nup, welcome
/** output
// {
//   userName: 'nup',
//   price: 99,
//   welcomeMessage: [Function: welcomeMessage]
// }
 */
console.log(this); //{}  /// doesn't conatin aything current context so empty


// case :::: adding this inside object and outside it
console.log(`:::: adding this inside object and outside it`)
const user3 = {
    userName : "minal",
    price : 99,

    welcomeMessage : function (){
        console.log(`${this.userName}, welcome`)//minal, welcome
        console.log(this); ///// inside print all current context
  
}
}
user3.welcomeMessage(); 
//o/p:::::::
// minal, welcome
// {
//   userName: 'minal',
//   price: 99,
//   welcomeMessage: [Function: welcomeMessage]
// }
console.log(this); //{}  /// doesn't conatin aything current context so empty

/// Only this written in function gives lots of values
console.log(`with funtion only this::::::`)
function chai(){
    console.log(this)
}
chai()  //// lots of value coming

/////  incase this.username
console.log(`incase this.username`)
function chai1(){
    let userName = "minal"
    console.log(this.userName)
}
chai1()  //// undefined

/// more declaration with arrow function

// case1
console.log(`more declaration`)
const chai1s= function (){
    let userName = "minal"
    console.log(this.userName)
}
chai1s() // undefined

// case2
console.log(`case2::::more declaration`)
const chaies= ()=>{
    let userName = "minal"
    console.log(this.userName)
}
chaies() // undefined

// case3
console.log(`case3::::just this called `)
const chaies1= ()=>{
    let userName = "minal"
    console.log(this)
}
chaies1() // {}   empty 

// Arrow function
console.log("Arrow functio ::: case1")
const addTwo = (num1, num2) => {
    return num1+ num2
}
console.log(addTwo(3,4)) // 7

// Arrow function with implicit return
console.log(` Arrow function with implicit return:: case1:::`)
const addTwo1 = (num1, num2) => (num1+num2)
console.log(addTwo1(6,8))// 14

// For returning object
console.log(`  For returning object:: case1:::`)
const add = () => ({userNmae: "minal"})
console.log(add()) // { userNmae: 'minal' } object return

// but without parathesis () => {userNmae: "minal"}
//undefimned get

console.log(` without parenthesis`)
const add1 = () => {userNmae: "minal"}
console.log(add1()) // undefined 



