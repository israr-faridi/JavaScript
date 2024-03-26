// let matrix = [[2, 3, 0, 9, 8, 7, 4],
// [4, 6],
// [2, 35, 6, 0, 999]]


// for (let i = 0; i < matrix.length; i++) {
//     console.log("start");
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
//     console.log("end");
// }


let matrix = [[5, 4, 5],
[2, 5, 6],
[2, 5, 8]];
let matrix2 = [[7, 8, 6],
[1,2,2],
[5,2,8]]

let sumMatrix = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        sumMatrix.push(matrix[i][j] + matrix2[i][j])
        
    }
}
console.log(sumMatrix);