let a =10;
const b= 20;
var c= 30
console.log(a) //10
console.log(b) //20
console.log(c) //30

// scope
if(true){
    let e =10;
    const f= 20;
    var g= 30
}
//console.log(e) // /ReferenceError: e is not defined
//console.log(f) //ReferenceError: f is not defined
console.log(g) //30 // give result outof scope

var h= 100

if(true){
    let i= 10;
    const j = 20
    var k = 9


}
console.log(k) // 9 // give same value which inside the scope

// but when define with let will not take the value inside the scope

let i = 300
const m = 2
if(true){
    let i= 10;
 
    const m = 3 
}
console.log(i)// 300
console.log(m) //2


// Nested scope

function one(){
    const userName = "minal"
    function two(){
        const website = "youtuber"
        console.log(userName)
    }
    //console.log(website)  // ReferenceError: website is not defined
    two()
}
one()

///////

if(true){
    const userName = "minal"
    if(userName==="minal"){
    const website = "  youtuber"
    console.log(userName + website) // o/p  :minal  youtuber
}
//console.log(website) // ReferenceError: website is not defined
}
//console.log(userName) //ReferenceError: userName is not defined

/// Two ways to define function

function addOne(num){
    return num+1
}
addOne(5) // no o/p as it just returning not printing

// By using variable defining function
const addTwo = function(num){
    return num+2
}
addTwo(9)  // no o/p as it just returning not printing

// In case if function is been called before initialization below this happen in 
// both type of defnition:

console.log(addOne1(6)); // 7
function addOne1(num){
    return num+1
}

////////
console.log(addTwo2(2)); // ReferenceError: Cannot access 'addTwo2' before initialization
const addTwo2 = function(num){
    return num+2
}





