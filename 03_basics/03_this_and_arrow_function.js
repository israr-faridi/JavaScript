let personInfo = {
    userName: "Israr",
    price: 999,
    welcomeMessage: function () {
        console.log(`Mr ${this.userName} , Welcome to the school`);
        // console.log(this);
    }
}

// personInfo.welcomeMessage()
// personInfo.userName = "sam"
// personInfo.welcomeMessage()

// console.log(this);



//// ++++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++

//// sample arrow function
const addTwoNum = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwoNum(1, 2));



//// arrow function in one code
const addTwoNumOneLine = (num1, num2) => num1 + num2
// console.log(addTwoNumOneLine(1, 2));



//// arrow function with breaket in one code
const addTwoNumOneLineWithBreaket = (num1, num2) => (num1 + num2)
// console.log(addTwoNumOneLineWithBreaket(5,8));




//// Object arrow function oneline 
const ObjArrowFunction = () => ({ Ali: "malik" })
console.log(ObjArrowFunction());