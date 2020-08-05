//Comparison Operators

let nilaiA = 10
let nilaiB = "10"

// console.log(nilaiA == nilaiB) // nilai sama = true
// console.log(20 === 20) // nilai dan type datanya sama = true
// console.log("a" == "b")
// console.log(20 > 10)
// console.log(10 < 20)
// console.log(9 <= 10)
// console.log(20 >= 10)
// console.log(11 != 10)

// console.log(Boolean("Halo")) //true
// console.log(Boolean(12)) //true
// console.log(Boolean(-1)) //true
// console.log(Boolean(0)) //false
// console.log(Boolean(undefined)) //false
// console.log(Boolean(null)) //false
// console.log(Boolean("")) //false

//Logical operator
//TRUE        //TRUE
console.log(10 === "10" && 20 === "20")// jika sama-sama benar makan akan bernilai TRUE
//FALSE       //TRUE   ==> FALSE
console.log(10 === "10" && 20 == "20")
//FALSE       //TRUE   ==> TRUE
console.log(10 === "10" || 20 == "20")// selama ada nilai TRUE maka hasilnya akan TRUE

//IF...ELSE IF...ELSE
// let data = "Halo"
// if (data == "Halo") {
//     let nama = "Andi"
//     console.log("Halo" + nama)
// } else if (data == "Hai") {
//     console.log("Halo")
// } else {
//     console.log("Tidak tau")
// }

let nilai = 92
//Single Block Condition
if (nilai > 80) {
    console.log('Excellent')
}

//Double Block Condition
if (nilai == 100) {
    console.log("Great Job")
}
else {
    console.log("Great")
}

//Multiple Block Condition
if (nilai == 100) {
    console.log("Great Job")
}
else if (nilai < 100 && nilai > 90) {
    console.log("Great")
} else {
    console.log("Good")
}

let lulus = false

if (lulus) {
    console.log("Graduation")
}

//SWITCH...CASE
let job = "polisi"

// switch (job) {
//     case 'guru':
//         return console.log("Dia pengajar")
//     case 'polisi':
//         return console.log("Tukan Tilang")
//     default:
//         console.log("Kerjanya apa dong")
// }

// switch (job) {
//     case 'guru':
//     case 'polisi':
//         return console.log("Pekerjaan Mulia")
//     default:
//         console.log("Kerjanya apa dong")
// }


let angkaA = 40
let angkaB = 20

if (typeof (angkaA) == "number" && typeof (angkaB) == "number") {
    console.log(angkaA, "Adalah number")
    console.log(angkaB, "Adalah number")
    if (angkaA > angkaB) {
        console.log("Angka A BESAR")
    } else {
        console.log("Angka A KECIL")
    }
}

//Switch Case 2 Variable

let alaskaki = "sendal";
let warna = 'merah';

switch (true) {
    case (alaskaki == "sepatu" && warna == "merah"):
        console.log("Sepatuku Merah")
        break
    case (alaskaki == "sendal" && warna == "merah"):
        return console.log("Sendalku Merah")
    case (alaskaki == "sendal" && warna == "biru"):
        return console.log("Sendalku biru")
    default:
        console.log('Tak punya alas kaki')
}