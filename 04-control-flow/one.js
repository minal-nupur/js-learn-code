// control flow

if(2!=3){
    console.log("executed") // executed
}

//2
const temp = 41
if(temp === 40){
    console.log("less than 50")
}
else{
    console.log("temp is greater then 50")
}
console.log("executed")
//o/p
//temp is greater then 50
// executed

/// SCope related
// Block scope

 const score = 200;

 if(score > 100){
    const power = "fly"
    console.log(`User power : ${power}`)  // User power : fly
 }
 //console.log(`User power : ${power}`);  // ReferenceError: power is not defined
  // because power defined inside if condition
 console.log(`User powerdone`);   // User powerdone


 /// Implicit Scope
// not a good practise to use
 const balance = 500;
 if(balance== 500) console.log("test"), console.log(" test2");

 // Nesting scope 

 const blan = 1000;

 if(blan <500){
    console.log(" less then 500")
 }
 else if(blan < 750){
    console.log(" less then 750")
 }
 else if(blan < 900){
    console.log(" less then 900")
 }
 else{
    console.log(" greater then 950")
 }
 // greater then 950

 // case 2
 const userLoggedIn = true;
 const debitedCard = true;
 const loggedInFromGoogle= false
 const loggedInFromEmail = true

 if(userLoggedIn && debitedCard){
    console.log("Allowed to buy");
 }
 if(loggedInFromGoogle||loggedInFromEmail){
    console.log("Used Logged In")
 }
//  Allowed to buy
// Used Logged In

