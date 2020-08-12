/*Day 07 : Function
	1. Function : sub-program atau sebuah fungsi yang berada didalam sebuah program untuk menuntaskan suatu proses. Dan dapat dipanggil berulang"
	2. Untuk memakai function, function harus dibuat terlebih dahulu
	3. Function bersifat reusability, atau dapat digunakan berulang-ulang
	4. Function juga bersifat modular
	5. Built-in function bawaan javascript
	6. User-defined function yg kita buat sendiri
		a. Menggunakan keyword function
		b. Nama bebas
		c. Parameter/argumen
			i. Disimpan didalam()
			ii. Boleh ada atau tidak
			iii. Jika > 1, harus dikasih pemisah ","
		d. Body function dibungkus { }
		e. Boleh mengembalikan nilai / return  boleh tidak
	7. Declarative function --> function namaFunc(param1,param2){console.log(param1+param2) }
Function expression --> var namaFunc = function(param1,param2){console.log(param1+param2) }*/

//Function Declarative atau Function Statement
function penjumlahan(param1, param2, param3) {
    param1 + param2 + param3
}

// console.log(penjumlahan(4, 5, 1))

//Function expression
let pengurangan = function (param) {
    console.log(5 - 3)
}

// pengurangan()

//Recursive Function
function pangkat(x, y) {
    if (y == 1) {
        console.log("con1", y, x)
        return x
    } else {
        console.log("con2", y, x)
        return x = x * pangkat(x, y - 1)
    }
}

// console.log(pangkat(4, 3))

function test() {
    console.log("TestTestTest")
}

console.log("Tahap 1")
// setTimeout(test, 3000)
// setInterval(test, 1000)
console.log("Tahap 2")
console.log("Tahap 3")

//Arrow Function
perkalian = () => {
    console.log(5 * 3)
}

var pembagian = () => {
    console.log(10 / 2)
}

perkalian()
pembagian()