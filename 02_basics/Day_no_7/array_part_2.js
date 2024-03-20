////////////////////////////////////////////
//// how to add array in signal array /////
//////////////////////////////////////////

let Marvel_hero = ["Spiderman", "IronMan", "Thor"]
let Dc_hero = ["SuperMan", "Badman", "Flash"]


// // push
// Marvel_hero.push(Dc_hero)
// console.log(Marvel_hero);


// // ConCat
let allHeros = Marvel_hero.concat(Dc_hero)
// console.log(allHeros);


// // Spared Operator
let sparedHero = [...Marvel_hero, ...Marvel_hero]
// console.log(sparedHero);


// /////////////////
/// signal Array //
//////////////////

// // Flat
let arr = [1, 4, 5, 6, 7, [3, 5, 6, 6], 33, [3, 5, 77, 8, 9, [3, 4, 5, 6, [35, 6, 7]]]]

let arrAnOne = arr.flat(Infinity)
// console.log(arrAnOne);



// // Array some more method 
console.log(Array.isArray("Israr"));
console.log(Array.from("Israr"));
console.log(Array.from({ name: "israr" })); // array cannot conveter object directly. first you say array to change in properties or key array. and all that think are not convert in array so in this place array show blank array


let Arr0 = "bhai"
let Arr2 = "ana"
let Arr3 = "you"

console.log(Array.of(Arr0,Arr2,Arr3));





