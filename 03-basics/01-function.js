function sayMyName(){
    console.log("M")
    console.log("i")
    console.log("n")
    console.log("a")
    console.log("l")
}
sayMyName();
//o/p 
// M
// i
// n
// a
// l

//Function with sum operation
function sumTwoNumber(num1, num2){
    console.log(num1+num2)
}
sumTwoNumber(); // NaN // No input mentioned

sumTwoNumber(5,2) // 7

sumTwoNumber(5,"2")// 52

sumTwoNumber(5, null) //5

const result = sumTwoNumber(5,2)
console.log("Result: ", result) // Result:  undefined
// no value is return inside the function so the overall o/p giving undefined, but still the 
// result is coming

// To resolve that have to return inside function
function sumTwoNumber1(num1, num2){
    //let result1 = num1+num2;
    //return result1

     return num1+num2
}
const result1 = sumTwoNumber1(2,7);
console.log("Result2: ",result1)  // Result2:  9

function loginUserMessage (userName){
    return `${userName} just logged in`
}
console.log(loginUserMessage())// undefined just logged in
// as no value passed so undefined coming, we can overcome it

function loginUserMessage1(userName){
    if(userName===undefined){
        console.log("Please enter the user name");
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage1())
//Please enter the user name
//undefined just logged in

// still undefined is coming because next return is all in flow so to overcome have to add return 
// in if condition

function loginUserMessage2(userName){
    if(userName===undefined){
        console.log("Please enter the user name");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage2())
//Please enter the user name
//undefined



