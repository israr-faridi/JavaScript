// // Nested Object
let google = {
    email: "google@gmail.com",
    address: {
        ukAddress: "United Kingdom street no 2",
        india: "Dheli street no 4"
    },
    employee: {
        webdeveloper: {
            frondEnd: "smmy",
            backend: "nasser"
        }
    }
}

// console.log(google);
// console.log(google.employee.webdeveloper.frondEnd);

// // Join two object
let obj1 = {
    1: "a",
    2: "b"
}
let obj2 = {
    3: "c",
    4: "d"
}

let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);




let severSide = [{ name: "babu", fatherName: "baloo" }, { secondName: "nazeer", class: "unkown" }, { name: "babu", fatherName: "baloo" }, { secondName: "nazeer", class: "unkown" }]




console.log(Object.keys(google.address));



console.log(google.hasOwnProperty("employee"));