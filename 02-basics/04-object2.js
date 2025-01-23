// Declare singlton object using constructor:
const tinerUser = new Object
console.log(tinerUser);  // {} empty object created

const tinerUser1 = {}
console.log(tinerUser1)  // {} created user using literals give same as empty object

// Add value in singleton object
tinerUser.id = "123abc"
tinerUser.name= "minal"
tinerUser.isLoggedIn= false

console.log(tinerUser) // { id: '123abc', name: 'minal', isLoggedIn: false }

// Declare object under object

const regularUser = {
    email : "abc@gm.co",
    fullName: {
        userFullName:{
            firstName: "minal",
            lastName : "nupur"
        }
    }
}

console.log("///////")
console.log(regularUser)
//o/p
/**{
  email: 'abc@gm.co',
  fullName: { userFullName: { firstName: 'minal', lastName: 'nupur' } }
} */

  console.log(regularUser.fullName) // { userFullName: { firstName: 'minal', lastName: 'nupur' } }

  console.log(regularUser.fullName.userFullName.firstName)// minal

  //merging object
  const obj1 = {1:"a", 2:"b"}
  const obj2 = {3:"a", 4:"b"}

  const obj3 = {obj1, obj2}

  console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
  // not proper its printing refernce of both the object as well

  // Object.assign()

  const obj4= Object.assign(obj1, obj2) // not proper as it merge all the value on obj1 as its have
  // syntex:  Object.assign(target, source)
  // and so here target is obj1 
  console.log(obj4)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
  console.log(obj1)  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
  console.log(obj4===obj1)// true

  // for overcoming this we can use this sysntex:
  // Object.assign({}, obj1, obj2, so on)
const obj5 = {5:"a", 6:"b"}
const obj6= Object.assign({}, obj2, obj5)
console.log(obj6) // { '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj2)  // { '3': 'a', '4': 'b' }

// spread()    ...
const obj7 = {...obj2, ...obj6}
console.log(obj7) // { '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// When value come from database comes as an array of object
const user = [
    {
        id: 1,
        email: "min@gmail"
    },
    {
        id: 2,
        email: "minal@gmail"
    },
    {
        id: 3,
        email: "nupur@gmail"
    }
]

console.log(user[1].email) // minal@gmail

// Datatype of object keys and value

console.log(tinerUser) // { id: '123abc', name: 'minal', isLoggedIn: false }
// key datatype
console.log(Object.keys(tinerUser)) // [ 'id', 'name', 'isLoggedIn' ]

// values
console.log(Object.values(tinerUser)) // [ '123abc', 'minal', false ]

// Entries --> used to convert entry key and values in array
console.log(Object.entries(tinerUser))
// [ [ 'id', '123abc' ], [ 'name', 'minal' ], [ 'isLoggedIn', false ] ]

// Sometime some field might not present and we searching it, then there is a chance of chrash

// for this use to check before if the field is there or not
console.log(tinerUser.hasOwnProperty('isLogged')) // false

console.log(tinerUser.hasOwnProperty('isLoggedIn')) // true


//// Destructuring of Object
const course = {
    couseName : " js learning",
    price: "999",
    couseInstructor:"minal"
}
// for access
console.log(course.couseInstructor) // minal

// but every time we cannot write course.couseInstructor mutliple time
// instead we can destructure the name

// we can directly call it after it conversion
const {couseInstructor} = course
console.log(couseInstructor) // minal

// couseInstructor -> can change the name of it as it is too long
const {couseInstructor: instructor} = course
console.log(instructor) // minal

// also we can do in this way
console.log({couseInstructor}) // { couseInstructor: 'minal' }

// JSON Formate type : below seems like error but its not an error is a correct json formate
// {
//     "name" : "minal",
//     "coursename": "js study",
//     "price": "free"
// }
// some time also api can be in array
// [{},
//     {},
//     {}
// ]



