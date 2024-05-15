// *********************************** For of Loop ******************************************

let arr = [1, 2, 3, 5, 6, 9];

for (const num of arr) {
    // console.log(num)
}


let greeting = "Hello World";

for (const greet of greeting) {
    if(greet==" "){
        continue;
    }
    // console.log(greet)
}






//********************************* MAP ************************************* 

let map = new Map();

map.set('PK', 'Pakistan');
map.set('INR','India');
map.set('USA','United State of Ameria');

for (const [key,Value] of map) {
    // console.log(`${key} :> ${Value}`)
}


