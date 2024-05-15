//++++++++++++++++++++++++++++++++++ Reduce Method +++++++++++++++++++++++++++++++++++
const myNum = [1, 2, 3]

// with sample function
const total = myNum.reduce(function (acc, currVal) {
    // console.log(`acc ${acc} currVal ${currVal} `)
    return acc + currVal
}, 0)
// console.log(total)


// with arrow function
const totalNum = myNum.reduce((acc, currVal) => acc + currVal, 0)
// console.log(totalNum)





const shoppingCart = [
    {
        ItemName: "js course",
        price: 1000
    },
    {
        ItemName: "py course",
        price: 2000
    },
    {
        ItemName: "mobile dev course",
        price: 3000
    },
    {
        ItemName: "Data science course",
        price: 4000
    },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice)



