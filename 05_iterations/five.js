// ************************************ FOR EACH LOOP ****************************************
let myArr = ["html", "css", "js", "Expressjs"];

// //Sample ForEach Function
myArr.forEach((value) => {
    // console.log(value)
});



// //Special ForEach Function
function program(value) {
    // console.log(value)
}

myArr.forEach(program);







// ************************************ FOR EACH ON Arry OBJECT *****************************************
const myCode =[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Html",
        languageFileName:"Hyper Text Markup Language"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCode.forEach((item) => {
    console.log(item.languageName)
});