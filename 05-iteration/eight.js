// reduce()

//syntex
//myNum.reduce((acc, currentValue)=> acc+currentValue,initialValue)

const myNum = [3,7,8,9,0,4];
const myTotal = myNum.reduce(function(acc, curVal){
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal;
}, 0)
console.log(myTotal)
//o/p
// acc: 0 and curVal: 3
// acc: 3 and curVal: 7
// acc: 10 and curVal: 8
// acc: 18 and curVal: 9
// acc: 27 and curVal: 0
// acc: 27 and curVal: 4
// 31

const myTotal1 = myNum.reduce((acc, curr)=> acc+curr, 0)
console.log(myTotal1) // 31

const shopCart = [
    {
        item:'js course',
        price: 2999
    },
    {
        item:'python',
        price: 899
    }
]

// add all the courses price for shopping
const piceToPay = shopCart.reduce((acc, item)=> acc+ item.price, 0);
console.log(piceToPay)
//3898