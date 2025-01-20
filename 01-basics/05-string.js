const name ="minal"
const repoCount = 50;

console.log(name + repoCount + "value");// minal50value //its a outdated way of writing this

// String Interpolation
console.log(`Hello myname is ${name} with repoCount ${repoCount}`);// Hello myname is minal with repoCount 50

console.log(`Hello myname is ${name.toUpperCase()}`);// Hello myname is MINAL

const gameName1 = new String('minal');

console.log(gameName1[1]); // i

// diffrent methods of prototype:
console.log(gameName1.__proto__); //{} it is not empty but it give string object
//  diffrent methods in prototype

console.log(gameName1.length); //5
console.log(gameName1.toUpperCase());  // MINAL
console.log(gameName1.charAt(2));  // n
console.log(gameName1.indexOf('i'));  // 1

let game2 = "Minal-Nupur";
// const newString = game2.substring(0,4);
// console.log(newString); // Mina

const anotherString = game2.slice(-9, 5);  // nal  //
//  slice(endIndex{start from back pos 1}, startIndex{start from first pos 0})
//slice(endIndex, startIndex)
//must be in the proper range

console.log(anotherString);

const anotherString1 = game2.slice(-5, 3);
console.log(anotherString1);// empty because the mid range is mid correct

const newStr= "     minal    "
console.log(newStr);//     minal   
console.log(newStr.trim());//minal // whitespaces are removed

const url = "http://minal/ nupur/ 02"
const url1 = "http://minal/%20nupur/%2002" // %20 when user pass the 
                                        // url with space and the space is converted in to %20
console.log(url1.replaceAll('%20', '-'))  // http://minal/-nupur/-02 ;;; replace all the value 
console.log(url.replace(' ', '-'))     //  http://minal/-nupur/ 02  ;;; repalce first occurance

const gam = "Minal-Nupur-menu";

console.log(gam.split('-')); // [ 'Minal', 'Nupur', 'menu' ]
//converted into array from '-'






//
