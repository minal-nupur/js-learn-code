// for-in loop
// object and array

const myObj = {
    js: 'javaScript',
    cpp: 'c++',
    rb: "ruby",
    swift: 'swift by apple'
}
for (const key in myObj) {
        console.log(key)
   
}
//o/p // print the key
// js
// cpp
// rb
// swift

// for value printing
for (const key in myObj) {
    console.log(myObj[key])

}
//o/p
// javaScript
// c++
// ruby
// swift by apple

for (const key in myObj) {
    console.log(`${key} shortcut for ${myObj[key]}`)
}
//o/p
// js shortcut for javaScript
// cpp shortcut for c++
// rb shortcut for ruby
// swift shortcut for swift by apple

// check if we can apply for in aray as well

const prog = ["js", "py","java",'c++']

for (const key in prog) {
   console.log(key)
}
//o/p // array store as object with key so it will print key
0
1
2
3
// to get the value lets try
for (const key in prog) {
    console.log(prog[key])
 }
//o/p
// js
// py
// java
// c++
// we cannot iterate map using for-in

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State of America")
map.set('Fr', "France");

for (const key in map) {
   console.log(key)
}
// it will not give any error but it will not give any output as well
