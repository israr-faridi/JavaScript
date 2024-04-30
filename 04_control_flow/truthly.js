const email = "israrhussainfaridi90@gmail.com";
if (email) {
    console.log(`this email = ${email}, is correct`)
} else {
    console.log("this not an email")
}








// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function () { }





// // check empty Arry
// let arryEmpty = [];
// if (arryEmpty.length === 0) {
//     console.log("Arry is empty")
// }





//// check empty object
// let objEmpty = {};
// if (Object.keys(objEmpty).length === 0) {
//     console.log("Object empty")
// }







//// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)












// // Terniary Operator

// // condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")