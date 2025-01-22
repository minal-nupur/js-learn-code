const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
// // its not a correct way to get the array inside array so push doesn't support proper merge

// console.log(marvel_heros[3][1]) // flash

// concat()
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);  // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// comment the push method 

// spread():    ...  
const all_sup_hero = [...marvel_heros, ...dc_heros];
console.log(all_sup_hero); // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

// flat() = convert the list of array inside array as array.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_array = another_array.flat(Infinity);
console.log(real_array); 
/** output:
 * [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
 */

// isArray() = check if the emlement is array:

console.log(Array.isArray("Minal"));// false

// from()  // convert the element into array
console.log(Array.from("Minal")); // [ 'M', 'i', 'n', 'a', 'l' ]

// in some cases in from have to convert the elemt in array which in the map form , 
//here have to define what kind of array have to create arry of keys or values
console.log(Array.from({name: "minal"}))// []  give empty array because define if we need array of key
// or value 

// of() : return new array from set of elements , elemente can be aything
// variable or array

let score1 = 100;
let score2 = 200;
let score3 = 300
console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ]







