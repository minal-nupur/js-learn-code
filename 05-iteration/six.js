const coding =["js","java",'python','cpp']

//const values = coding.forEach((item)=> {
//    console.log(item);
//})
// o/p
// js
// java
// python
// cpp

const values1 = coding.forEach((item)=>{
    return item
})
console.log(values1) //undefined

const myName =[3,8,9,7,1,2];

const newNums = myName.filter((num)=> num>4)
console.log(newNums)// [ 8, 9, 7 ]

const newNums1 = myName.filter((num)=> {
    num>4
}) 
console.log(newNums1)// []
// here return is manditory because scope is been opened

const newNums2 = myName.filter((num)=> {
    return (num>4)
})
console.log(newNums2)// [ 8, 9, 7 ]

// 4
const newNums3 =[]
myName.forEach(num => {
    if(num>4){
        if(num>4){
            newNums3.push(num);
        }
    }
})
console.log(newNums3);
//[ 8, 9, 7 ]

const books = [{title :'Book one', genere : 'Fiction', publish:'1981', edition: '2004'},
              {title :'Book two', genere : 'Comedy', publish:'1992', edition: '2008'}]

const userBooks = books.filter((bk) => bk.genere==='Fiction' && bk.edition >=2004)    
console.log(userBooks) 

// o/p
// [
//     {
//       title: 'Book one',
//       genere: 'Fiction',
//       publish: '1981',
//       edition: '2004'
//     }
//   ]




