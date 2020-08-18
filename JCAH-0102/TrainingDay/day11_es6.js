// ECMAScript : standarisasi penulisan javascript yang baru
//Let Keyword
let y //deklarasi variable
y = 10 //assign varible
let x = 20 // initialization

//Constant keyword
const PI = 3.14
//PI = 10//error

function luaslingkaran(param) {
    const PI = 10
    console.log("Luas", PI * param * param)
}

console.log(PI)
luaslingkaran(5)

const nilai = [90, 20]
nilai.push(80)
console.log(nilai)

const nama = {}
nama.depan = "Aldo"
console.log(nama.depan)

//Template String
let halo = `Halo

Dunia`
console.log(halo)

function welcome(nama, usia) {
    console.log(`Hallo, saya ${nama} dan usia saya adalah ${usia < 20 ? "Muda" : "Remaja"}`)
}


welcome("Andi", 12, "Laki-laki")//argument harus sesuai dengan jumlah parameter yg dibutuhkan

let a = "bola@mail.com"
console.log(a.repeat(3))
console.log(a.includes('@'))

console.log(a.startsWith('la', 2))

//Spread operator

let buah = ["apel", "jeruk", "mangga"]
console.log(buah)
console.log(...buah)

//default parameter
function printBuah(x = "naga", y = 'semangka', z = "pisang") {
    console.log(x, y, z)
}

printBuah(...buah)
printBuah()

//Arrow function
// cara 1
//let printData = () => {
//     console.log("Arrow")
// }
//cara 2
// printData = () => {
//     console.log("Arrow")
// }
//cara 3
printData = () => console.log("Arrow")

printData()
//menghasilkan return
let angka = () => ["angka", 10, true]
console.log(angka())

jumlah = angka1 => console.log(angka1 + 10)
jumlah(10)

jual = (pengeluaran, labaKotor) => {
    console.log(labaKotor(2 , 20000))
    console.log(pengeluaran)
    // labaKotor - pengeluaran
}

kotor = () => 10 * 20000
jual(20000, (x, y) => x * y)
// console.log('Laba Bersih', jual(20000, () => {return 10 * 20000}))

//destructuring
let siswa = ["Adi", "Bobo", "Danang"]
let [siswa1, siswa2, siswa3] = siswa
console.log(siswa1)
console.log(siswa2)
console.log(siswa3)