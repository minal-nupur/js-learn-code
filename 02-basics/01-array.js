
// in js array can be of mixed datatype

const myArr1 = [2,8,9,"minal"]

const myArr = [4,5,7,8]
// to Access

console.log(myArr[1]) //5
// push : intsert element at end
myArr.push(2);

console.log(myArr) // [ 4, 5, 7, 8, 2 ]

// pop  : delete element from end
myArr.pop();
console.log(myArr) // [ 4, 5, 7, 8 ]

// unshift : add the element at first position
// because of unshift all other elemnt position also changes, which is not good
myArr.unshift(9)
console.log(myArr) // [ 9, 4, 5, 7, 8 ]

//shift\ delete fist element from array
myArr.shift();
console.log(myArr) // [ 4, 5, 7, 8 ]

// includes  : check if the element is present in the array
console.log(myArr.includes(9)); //false
console.log(myArr.includes(7)); // true

// indexOf // check the index of element
console.log(myArr.indexOf(5))//1

console.log(myArr.indexOf(8)) // 3

// if the elemet is not present in the array the indexOf() will give -1
console.log(myArr.indexOf(11)) // -1

// join():  it convert the elemet in array as string
const newArr = myArr.join();
console.log(newArr); //  4,5,7,8
console.log(typeof newArr) // string

// slice() : return the suarray based before the range
console.log("A", myArr) // A [ 4, 5, 7, 8 ]

const newAr = myArr.slice(1,3)
console.log(newAr); // [ 5, 7 ]

console.log("B", myArr) // B [ 4, 5, 7, 8 ]
 
//splice()   return the subarray from start to end of range and store only left elemnt in array
const mya2 = myArr.splice(1,3);
 console.log("c", myArr) // c [ 4 ]
 console.log("d", mya2) // d [ 5, 7, 8 ]









