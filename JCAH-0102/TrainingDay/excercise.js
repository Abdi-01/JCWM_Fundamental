// //Mencari huruf tengah
// function Tengah(string) {
//     //mencari nilai tengah dari panjang string
//     let hasil = string.length / 2
//     //pengecekan kondisi, apakah string berjumlah ganjil atau genap
//     if (string.length % 2 != 0) {
//         //jika ganjil, nilai dari variable hasil langsung digunakan untuk mengakses by indexnya
//         //Kenapa menggunakan Math.floor ? karena variable hasil menghasilkan angka desimal, dan index dimulai dari 0. 
//         return string.charAt(Math.floor(hasil))
//     } else {
//         return string.charAt(hasil - 1) + string.charAt(hasil)
//     }
// }
// console.log(Tengah('Hewan'))

// function XO(string) {
//     var jumlahX = 0
//     var jumlahO = 0
//     for (i = 0; i < string.length; i++) {
//         if (string.charAt(i) == 'X') {
//             jumlahX += 1
//         }
//         else if (string.charAt(i) == 'O') {
//             jumlahO += 1
//         }
//     }
//     if (jumlahX == jumlahO) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(XO('XOOOXXX'))

// var iden = [
//     {
//         nama: 'Abdi',
//         usia: 23
//     },
//     {
//         nama: 'Ibnu',
//         usia: 24
//     },
//     {
//         nama: 'Mikhel',
//         usia: 20
//     },
//     {
//         nama: 'Hilmi',
//         usia: 22
//     }
// ]

// function ulang(arr) {
//     let penampung = []
//     //looping untuk mengakses data
//     for (i = 0; i < arr.length; i++) {
//         let hasil = arr[i].nama
//         let n = ''
//         // looping untuk memproses perulangan kata
//         for (j = 0; j < hasil.length; j++) {
//             n += hasil
//         }
//         penampung.push(n)
//     }
//     return penampung
// }

// console.log(ulang(iden))

// var symC = ""
// //looping untuk membuat baris
// for (let i = 1; i <= 5; i++) {
//     //looping untuk membuat kolom
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

// console.log("Triangle-1")
// let input = "PATEN"
// var symD = ""
// for (let i = 1; i < (input.length * 2); i++) {
//     if (i <= input.length) {
//         for (let j = 0; j < i; j++) {
//             symD += input.charAt(j) + ' '
//         }
//     }
//     if (i > input.length) {
//         var count = 0
//         for (let k = input.length; k > i - input.length; k--) {
//             symD += input.charAt(count) + ' '
//             count++
//         }
//     }
//     if (i < (input.length * 2)) {
//         symD += "\n"
//     }
// }
// console.log(symD)

// var str = ''
// var arr = [12, 9, 20, 12, 1, 13, 4, 5, 2, 3, 7, 8, 9, 1, 2, 3, 54, 32, 1, 1]

// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (i == 0 && arr[j] % 2 == 0) {
//             str += `${arr[j]}  `
//         }
//         else if (i == 2 && arr[j] % 2 != 0) {
//             str += `  ${arr[j]}`
//         }
//         if (i == 1) {
//             str += j % 2 == 0 ? '➖ ' : '➖➖ '
//             if (j == arr.length - 1) str += "Jalan Tamrin🚧"
//         }
//     }
//     str += '\n'
// }

// console.log(str)

//Test find user

let dbUser = [
    {
        username: "Admin",
        password: '123',
        role: 'admin'
    },
    {
        username: "Budi",
        password: '321',
        role: 'user'
    },
    {
        username: "Andi",
        password: '456',
        role: 'user'
    }
]


//mencari index dari array
let cari = dbUser.findIndex((item) => item.password == "123a")

console.log(cari)