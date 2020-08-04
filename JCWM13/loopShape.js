// //Line Horizontal
// console.log("Line Horizontal")
// var sym = ""
// for (let i = 0; i < 5; i++) {
//     sym += " # "
// }
// console.log(sym)
// //Line Vertical
// console.log("\nLine Vertical")
// var symB = ""
// for (let i = 0; i < 5; i++) {
//     symB += " #\n"
// }
// console.log(symB)
// //Box
// console.log("Box")
// var symC = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i == j) {
//             symC += `${i} `
//         } else {
//             symC += `0 `
//         }
//     }
//     if (i < 5) {
//         symC += "\n"
//     }
// }
// console.log(symC)
// //Triangle-1
// console.log("Triangle-1")
// var symD = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         symD += j == i ? `${j} ` : '0 '
//     }
//     if (i < 5) {
//         symD += "\n"
//     }
// }
// console.log(symD)
// //Triangle-2
// console.log("\nTriangle-2")
// var symD = ""
// let count = 1
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         symD += `${count} `
//         count++
//     }
//     if (i < 5) {
//         symD += "\n"
//     }
// }
// console.log(symD)
// //Triangle-3
// console.log("\nTriangle-3")
// var symD = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 5; j >= i; j--) {
//         symD += `# `
//     }
//     if (i < 5) {
//         symD += "\n"
//     }
// }
// console.log(symD)
// // Triangle
// let limit = 4
// console.log("\nTriangle Piramid")
// var symE = ""
// for (let i = 0; i < limit; i++) {
//     //loop untuk membuat segitiga pertama dengan spasi
//     for (let j = limit - 1; j > i; j--) {
//         symE += "  "
//     }
//     //loop untuk membuat segitiga kedua
//     for (let j = 0; j <= i; j++) {
//         symE += `# `
//     }
//     for (let k = 0; k < i; k++) {
//         symE += "# "
//     }
//     // if (i < limit) {
//     symE += "\n"
//     // }
// }
// // symE = '* * * # \n* * # # @ \n'
// console.log(symE)
// //Triangle
// console.log("Triangle Reverse Piramid")
// var symE = ""
// for (let i = 0; i < 5; i++) {
//     //loop untuk membuat segitiga pertama dengan spasi
//     for (let j = 1; j <= i; j++) {
//         symE += "  "
//     }
//     //loop untuk membuat segitiga kedua
//     for (let j = 5; j > i; j--) {
//         symE += "# "
//     }
//     for (let k = 4; k > i; k--) {
//         symE += "# "
//     }
//     if (i < 5) {
//         symE += "\n"
//     }
// }
// console.log(symE)
// //Diamond
// console.log("Diamond")
// var symE = ""
// for (let i = 0; i < 4; i++) {
//     //loop untuk membuat segitiga pertama dengan spasi
//     for (let j = 4; j > i; j--) {
//         symE += "  "
//     }
//     //loop untuk membuat segitiga kedua
//     for (let j = 0; j <= i; j++) {
//         symE += "# "
//     }
//     for (let k = 0; k < i; k++) {
//         symE += "# "
//     }
//     if (i < 5) {
//         symE += "\n"
//     }
// }
// for (let i = 0; i < 5; i++) {
//     //loop untuk membuat segitiga pertama dengan spasi
//     for (let j = 1; j <= i; j++) {
//         symE += "  "
//     }
//     //loop untuk membuat segitiga kedua
//     for (let j = 5; j > i; j--) {
//         symE += "# "
//     }
//     for (let k = 4; k > i; k--) {
//         symE += "# "
//     }
//     if (i < 5) {
//         symE += "\n"
//     }
// }
// console.log(symE)

//NEW/////Triangle-1 
console.log("Triangle-1")
let input = "manual"
var symD = ""
for (let i = 1; i < (input.length * 2); i++) {
    if (i <= input.length) {
        for (let j = 0; j < i; j++) {
            symD += input.charAt(j) + ' '
        }
    }
    if (i > input.length) {
        var count = 0
        for (let k = input.length; k > i - input.length; k--) {
            symD += input.charAt(count) + ' '
            count++
        }
    }
    // if (i < 5) {
    symD += "\n"
    // }
}
console.log(symD)