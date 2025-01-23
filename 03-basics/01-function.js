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

/// Function with Object and array
//: With Object

console.log(calculatePrice("function with object :::::::"));
function calculatePrice(num1){
    return num1;
}
console.log(calculatePrice(2)); // 2

// with multiple arguments
console.log(calculatePrice(200,400,500)) // 200 // return only first value
// to overcome this issue use RestOperator(...)

function calculatePrice1(...num1){
    return num1
}
console.log(calculatePrice1(200,600,780))  // [ 200, 600, 780 ]

// Sometime also used:
function calculatePrice2(val1, val2, ...num1){
    return num1
}
console.log(calculatePrice2(200,400,500,600)) // [ 500, 600 ] // initial two are in val1 and val2

// Object passed
const user = {
    userName : "minal",
    price : "23"
}

function handleObject(anyObject){
    console.log(`User is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)// User is minal and price is 23

handleObject({
    userName : "Nupur",
    price: 45
})
/// User is Nupur and price is 45

const user1 = {
    userName : "minal"
}
console.log(`Enter correct data example`)
function handleObject(anyObject){
    if(anyObject.userName===undefined || anyObject.price=== undefined){
        console.log(`Enter correct data`)
        return
    }

    return`User is ${anyObject.userName} and price is ${anyObject.price}`
}

console.log(handleObject(user1))// Enter correct data



// Insert Array in function
const myNewArray = [300,600,900]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)) // 600

console.log(returnSecondValue([300,89,12])) // 89



