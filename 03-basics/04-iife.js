// IIFE

// used in case to execute some code immediatly to avoid global scope polution

function chai(){
    console.log(`DB connection`)
}
chai() ;// DB connection

// For running immediatly
//console.log(`case 2:::: For running immediatly use ()()`)
// nothing is written in between two iife
(function chai1(){
    console.log(`DB connection two`);
})(); //  DB connection two

(() => {
    console.log(`db connection 3`)
}) (); // db connection 3

// for multiple iife we have add ; at the end of each iife 
// to break the flow inbetween anf come to other flow

// case:::: 3 pass the value and use IIFE
((name) => {
    console.log(`DB Connection ${name}`);
})('minal'); // DB Connection minal

