// stack

let myName ="Minal";
let anotherName = myName;

console.log(myName);  // Minal
console.log(anotherName);  // Minal

anotherName = "Nupur";
console.log(anotherName); //Nupur // as in stack the copy is provided, so if the copy changes
                                   // it will reflect on anotherName 
console.log(myName); // Minal  ///but the myName not changed


//heap

let userOne = {
    email : "minal@gmail.com",
    upi: "min@ybl"
}

let userTwo = userOne;

console.log(userOne); // { email: 'minal@gmail.com', upi: 'min@ybl' }
console.log(userTwo); // { email: 'minal@gmail.com', upi: 'min@ybl' }

userTwo.email = "nupur@.com";

console.log(userOne.email); // nupur@.com  // as the reference of object provided so the
                                       //  actual value changes
console.log(userTwo.email); // nupur@.com
console.log(userOne); // { email: 'nupur@.com', upi: 'min@ybl' }
console.log(userTwo); // { email: 'nupur@.com', upi: 'min@ybl' }