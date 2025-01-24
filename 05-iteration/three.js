// for loop(Specially for Array and Map)
// Inside array we can take object also
// [{},{},{}]

const arr =[1,7,8,6];
for (const num of arr) {
    console.log(num)  ; 
}
//1
// 7
// 8
// 6

// 2
const greetings= "hellow world";

for (const greet of greetings) {
    console.log(greet)
    
}
//o/p
// h
// e
// l
// l
// o
// w
 
// w
// o
// r
// l
// d

// Map // hold key valsue pair and key should be unique , 
// and insertion order of key store unique values

const map = new Map
map.set('IN', "India");
map.set('USA', "United State of America")
map.set('Fr', "France");
 console.log(map)// it will print in object formate
//o/p
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   } 
map.set('IN', "India")
console.log(map)// no duplicate key is insterted
//o/p
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France'
//   }
map.set('aa', "India")
console.log(map)// duplicate value are allowed
// Map(4) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'Fr' => 'France',
//     'aa' => 'India'
//   }

// for loop on map

for (const key of map) {
    console.log(key)
}
//o/p
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
    console.log(key, ":-", value)
}
// IN :- India
// USA :- United State of America
// Fr :- France

// for of on object iteration

const myObject = {
    game1:'NFS',
    game2:'SpiderMan'
}
// for (const key of myObject) {
//     console.log(key)
// }
//Error TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value)
// }
// TypeError: myObject is not iterable


