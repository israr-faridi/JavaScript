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




function loginMessage(username="same") {
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
console.log(loginMessage());