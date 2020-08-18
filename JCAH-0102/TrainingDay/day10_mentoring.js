//Review function

//Cara 1 : keyword function
// function penjumlahan(param1, param2) {
//     let hasil = param1 + param2
//     return hasil
// }
function penjumlahan(param1, param2) {
    let hasil = param1 + param2
    // console.log(hasil)
}

// console.log(penjumlahan(2, 1))
penjumlahan(3, 2)

//Cara 2 : function expression
var pengurangan = function (param1, param2) {
    console.log(param1 - param2)
}

pengurangan(5, 2)

//Cara 3 : arrow function
jumlah = (param1, param2) => param1 + param2
let kurang = (param1, param2) => { return param1 - param2 }
console.log(jumlah(5, 2))

//Penempatan variable
// let global //global variable : bisa diakses dimana saja selama dalam satu file program

// function coba(params) {
//     let scope //scope variable : hanya bisa diakses didalam scope function
//     global //memanggil variable global

//     for (let index = 0; index < array.length; index++) {
//         let element = array[index]; // variable yg hanya bisa dibaca didalam scope for looping
//         for (let index = 0; index < array.length; index++) {
//             scope
//             let a
//             element
//         }
//     }
//     element//tidak bisa diakses karena diluar scope for loop
// }

//Ternary operator
// 2 > 0 ? console.log("2 lebih dari 0") : console.log("2 tidak lebih dari 0")
// let hasil =
//     2 > 0 ?
//         2 + 1 == 3 ?
//             "hasil 3"
//             : "tidak 3"
//         : 0 == 0 ? "Ini 0" : null

// if (condition) {
//     if (condition) {

//     } else {

//     }
// } else {
//     if (condition) {

//     } else {

//     }
// }
// console.log(hasil)

//Map dan Filter

let angka = [2, 3, 4, 5, 6]

let angkaNew = angka.map((item) => {
    if (item % 2 === 0) {
        return item
    }
})
let angkaCari = angka.filter((item) => item == 2)

console.log(angkaNew)
console.log(angkaCari)

//Array
let arr = [[10, 2, 3], ["A", "B", "C"], { nama: "Andi", usia: 8 }]
let nilai = [90, 80, 70]
//DUplikasi Array
let produk = ["Sepatu", "Kaos", "Jaket"]
// let produkNew = [...produk]

//concatination atau penggabungan
let newArr = nilai.concat(produk)
let newArrB = [...nilai, ...produk]
console.log(newArr)
console.log(newArrB)

//Fungsi yg sering dipakai didalam array
//PUSH,SPLICE,SORT,MAP,forEach


//Object
let coba = { name: "Aldo", usia: 25, negara: "INA" }
console.log(coba.usia)
console.log(coba["usia"])
