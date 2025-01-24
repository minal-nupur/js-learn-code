// for each loop
// its inbuild method in array
// its a higher order function

const coding = ['js',"java", "py", "c++"];

coding.forEach(function(val){
    console.log(val)
})
//o/p
// js
// java
// py
// c++

// using arrow loop
coding.forEach((item)=>{
    console.log(item)
})
//o/p
// js
// java
// py
// c++

// delcare function and call inside for each loop
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
//o/p
// js
// java
// py
// c++

// case 

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})
//o/p
// js 0 [ 'js', 'java', 'py', 'c++' ]
// java 1 [ 'js', 'java', 'py', 'c++' ]
// py 2 [ 'js', 'java', 'py', 'c++' ]
// c++ 3 [ 'js', 'java', 'py', 'c++' ]

// inside forEach we can access value== intem, index== index and whole array== arr


// array of object

const myCoding= [{
    languageName :'javascript',
    languageFileName: 'js'
},
{
    languageName :'java',
    languageFileName: 'java'
},
{
    languageName :'python',
    languageFileName: 'py'
}]
myCoding.forEach((item)=>{
    console.log(item)
})
//o/p:
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'py' }

myCoding.forEach((item)=>{
    console.log(item.languageName)
})
//o/p:::
//javascript
// java
// python