// let temperature = 42;
// if (temperature < 59) {
//     console.log("temperature is less than 59")
// }else {
//     console.log("temperature is greater than 59")
// }
// console.log("exute")




// const sorce = 200;
// if (sorce > 100) {
//     let power = "fly";
//     console.log(`user power:${power}`)
// }

// console.log(power)//let is block level







// let usersorce = 1000;
// if (usersorce < 400) {
//     console.log("less than 400")
// } else if (usersorce < 750) {
//     console.log("less than 750")
// } else {
//     console.log("less than 1200")
// }






const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}

if (userLoggedInFromEmail || userLoggedInFromGoogle) {
    console.log("User logged in")
}