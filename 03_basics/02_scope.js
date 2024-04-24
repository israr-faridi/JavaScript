function scope() {
    let name = "aman"

    function classInfo() {
        let className = "9"
        console.log(name);
    }
    // console.log(className); // error because we can not call the vareable out of block scope  
    classInfo()
}
// scope()





// +++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++

// FIRST METHOD

console.log(addOneNumber(2)); // Sample function we can call before function
function addOneNumber(num) {
    return num + 1;
}
// console.log(addOneNumber(2));

// SECOND METHOD

console.log(addTwoNumber(4)); // Variable function we can not call before variable function
const addTwoNumber =function (num){
    return num + 2
}
// console.log(addTwoNumber(4));