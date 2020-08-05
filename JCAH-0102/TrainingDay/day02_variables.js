// Variables
// Var declaration
var name = "Jojo"
var name = "Bagus"

console.log('Test Var : ', name)

var data = 2 //global variable declaration
var data = "datas"
if (true) {
    // data = 3
    var dataB = 5 //private variable declaration
}

console.log('Test private variable :', data, dataB)

//defaultnya VAR
x = 2020
var x //Hoisting atau dipindah kebaris atas oleh sistem

console.log(x)

// Let declaration

// Cara deklarasi 1
let angka = 10
let _angka = 9
let $angka = 8
let angkaPertama
let angka_kedua

if (true) {
    let private = "nama"
    console.log("Test Private", private)
}


console.log('Test Let : ', angka, _angka, $angka)

// Cara deklarasi 2
let barang = "Masker", harga = 900
console.log("Test deklarasi", barang, harga)


// Const declaration
const PI = 3.14

console.log("Test Const :", PI)