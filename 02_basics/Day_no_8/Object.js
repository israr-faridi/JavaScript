// // Object literal
let sym=Symbol("key1")
let firstObj={
    name:"Israr",
    [sym]:"symbol key1",
    email:"israrhussainfaridi90@gmail.com",
    rollNumber:22344
}


// console.log(firstObj.name);
// console.log(firstObj['name']);
console.log(firstObj[sym]);

// // object Freeze
Object.freeze(firstObj)
firstObj.name="Baba"
console.log(firstObj.name);
