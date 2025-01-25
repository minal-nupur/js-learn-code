const myNum =[1,2,3,4,5,6,7,8,9];

const newNums = myNum.map((num) => num+10)
console.log(newNums)
//o/p
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

newNums1 = myNum.map((num) => {
    num+10
})
console.log(newNums1)
//o/p
// [
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined, undefined,
//     undefined
//   ]

newNum3 = myNum.map((num)=>{
        return num+10
})
console.log(newNum3)
//o/p
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

const newNu = myNum.map((num)=>num*10)
.map((num)=>num+1);
console.log(newNu)
//o/p
// //[
//     11, 21, 31, 41, 51,
//     61, 71, 81, 91
//   ]
const newNu1 = myNum.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40);
console.log(newNu1) // [ 41, 51, 61, 71, 81, 91 ]

