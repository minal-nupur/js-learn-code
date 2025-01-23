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


