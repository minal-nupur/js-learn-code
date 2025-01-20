
//Primitive datatype
//Number, String, Boolean, null, undefined, sysmbol

const score = 100
console.log(score); // 100
console.log(typeof score); //number

const scrore1 = 100.67
console.log(scrore1); //100.67
console.log(typeof scrore1); //number

const isLonggedIn = false
console.log(isLonggedIn); //false
console.log(typeof isLonggedIn); //boolean

const outSideTemp = null
console.log(outSideTemp); // null
console.log(typeof outSideTemp);// object

let emailID;
console.log(emailID); // undefined
console.log(typeof emailID);// undefined

// sysmbol use to store unique data and datatype of it is Symbol
const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);  //false
console.log(typeof anotherId);  // symbol

const bigNumber = 67830930822787n
console.log(bigNumber); // 67830930822787n
console.log(typeof bigNumber) //bigint

//Non-primitive 
// Array, Function,Object

const heros = ["Shaktiman", "naagraj", "doga"];
console.log(heros);  // [ 'Shaktiman', 'naagraj', 'doga' ]
console.log(typeof heros); // object

let obj = {
    name: "minal",
    age: 23
}

console.log(obj); //{ name: 'minal', age: 23 }
console.log(typeof obj) // object

const objCon = obj;
console.log(objCon); // { name: 'minal', age: 23 }
console.log(typeof objCon); // object

const myFunction = function(){
    console.log("hello world");
}

console.log(myFunction); //[Function: myFunction]   function object
console.log(typeof myFunction) //function

