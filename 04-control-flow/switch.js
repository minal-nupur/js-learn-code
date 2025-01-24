// Switch :::   use when multiple value goes through multiple condition

//syntex
// switch(key){
//     case value:
//         break;
//     default:
//         break;    
// }

///// case 1

const month = 3;

switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break; 
    case 4:
        console.log("April")
        break;
    default:
        console.log("default") 
        break;    
}
/// O/P March

/// Example 2
const month1 = "march";

switch(month1){
    case "jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("Feb")
        break;
    case "march":
        console.log("March")
        break; 
    case "april":
        console.log("April")
        break;
    default:
        console.log("default") 
        break;    
}
//o/p:::: March

// default case
// if passed case break uncommented then then below case will run except default case
/// Example 2
const month3 = "march";

switch(month3){
    case "jan":
        console.log("Jan")
        break;
    case "feb":
        console.log("Feb")
        break;
    case "march":
        console.log("March")
        //break; 
    case "april":
        console.log("April")
        break;
    default:
        console.log("default") 
        break;    
}



