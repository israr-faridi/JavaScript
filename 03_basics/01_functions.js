// console.log("I");
// console.log("S");
// console.log("R");
// console.log("A");
// console.log("R");


function allClg() {
    console.log("I");
    console.log("S");
    console.log("R");
    console.log("A");
    console.log("R");
}

// allClg()



function sumTwoNum(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}

let result = sumTwoNum(5, 5)
// console.log(result);




function loginMessage(username = "same") {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginMessage());



// // price item calculation with rest 
function itemPrice(...num1) {
    return num1
}
// console.log(itemPrice(550,55,2,8,9,5));




// //Object with function
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
// let user = {
//     name: "Israr",
//     price: 700
// }
// handleObject(user)

// handleObject({
//     name: "Ali",
//     price: 1500
// })


// // Function in Array 
let myNewArray=[55,6,50,77,3,5];
function returnSecondValuceOfArray(getArray) {
    return getArray[1]
}

// console.log(returnSecondValuceOfArray(myNewArray));
console.log(returnSecondValuceOfArray([5,66,22,55,44,3,5]));