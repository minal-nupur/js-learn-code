const accountId = 1435
let accountEmail = "num18@gmail.com"
var accountPassword = "2345"
let accountState;
accountCity = "Ramgarh"

/*
//accountCity = "Ramgarh"
 not good practive always take with keywords

 best to use is let, 
 var also not good to use
 as if its value changed will be update to all the places as it doesnot support block and function
 scope so it will be update to all the place which is wrong
*/

console.log(accountId);

//for printing multiple attributes together we can take console.table

console.table([accountId, accountCity, accountEmail, accountPassword, accountState]);

//accountId = 3456; // Assignment to constant variable.
accountEmail = "minal@com"
accountPassword = 123 
accountPassword = "123" 
accountState = 1234
accountState = "Jharkhand"

console.table([accountId, accountCity, accountEmail, accountPassword, accountState]);




