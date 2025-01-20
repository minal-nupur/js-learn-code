// console.log(2>1); // true
// console.log(2>=1);  // true
// console.log(2<1);  // false
// console.log(2==1);  // false
// console.log(2!=1);  //true

// console.log("2" >1); //true
// console.log("02" >1); //true
  //**  avoid comparison  start*/
// console.log(null >0);  //false
// console.log(null ==0); // false
// console.log(null >= 0); // true

console.log(undefined >0);  //false
console.log(undefined ==0); // false
console.log(undefined >= 0); // false

 //**  avoid comparison  end*/

//Strict check  ===
//It checks for value and datatype as well

console.log("2" == 2); // true
console.log("2" === 2);  // false // diffrent datatype // string number



