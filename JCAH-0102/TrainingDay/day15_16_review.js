//Variable : sebuah media untuk menyimpan data
//Keyword variable ada 3 : var, let, const
//Data yang disimpan dalam variable : string(ditandai ""/'/`'), number(int/float), boolean(true/false), object({},[])

var nama //deklarasi
nama = "bob"

// var usia = 20 //inisialisasi
//var bersifat global variable

nama = "budi" //reassign = diisi ulang
var nama = "bima"//re-declare
console.log(nama)

let produk = "bunga" //inisialisasi variable
produk = "mawar"  //re-assign
// let produk = "melati" //❌tidak bisa re-declare

const PI = 3.14
// PI = 22/7 //❌tidak bis re-assign, const bersifat tetap atau constant
// const PI = 22 / 7
//const digunakan jika data yg disimpan tidak akan berubah
//const penamaannya menggunakan huruf kapital

let namanya = "Abdi"
console.log("Cetak nama " + namanya)
//penamaan variable harus dimulai dengan huruf
//penamaan symbol hanya _ atau $
//jika nama terdiri 2 kata atau >, gunakan camelcase, cnth : dataProduk, data_produk
//penamaan tidak boleh menggunakan spasi, cnth : ❌ data produk

console.log(Boolean("Huruf"))//true
console.log(Boolean(""))//false
console.log(Boolean(0))//false
console.log(Boolean(-1)) //true
console.log(Boolean(22)) //true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false

let sapa = "Hallo Bos"
console.log(sapa.length)
console.log("Hallo Bos".length)
console.log(sapa.indexOf('Bos')) //Mencari index, dari huruf pertama substring yang dicari
console.log(sapa.substr(6, 3))//mengambil substring dari index dan jumlah yang diambil
console.log(sapa.slice(6, 8))//mengambil substring dari start index - end index. Dan index terakhir tidak dimunculkan
console.log(sapa.split(''))//memisahkan substring berdasarkan parameter, dan merubahnya menjadi array
console.log(sapa.charAt(2))
console.log(sapa.charCodeAt(1))

let lower = "selamat"
let upper = "PAGI"

console.log(lower.toUpperCase()) //merubah string menjadi huruf kapital
console.log(upper.toLowerCase()) //merubah string menjadi huruf kecil

console.log(lower.replace('se', 'SE'))
console.log(lower.replace(/se/g, 'SE'))

let angka = 1234
console.log(angka)
console.log(angka.toString())

//konversi string menjadi angka
console.log(parseInt('234'), typeof (parseInt('234'))) //234 => number
console.log(parseFloat('234.5'), typeof (parseFloat('234.5'))) //234 => number, parseFloat merubah angaka string menjadi angka desimal
console.log(parseInt('234.7'), typeof (parseInt('234.7'))) //234 => number

console.log(parseInt('Hallo'), typeof (parseInt('Hallo'))) //NaN => number => bernilai false

//Adding string
let char = 'Halo' + 10
console.log(char, typeof (char))//Halo10 => string
console.log(10 + 10 + char, typeof (char))//20Halo10 => string

console.log(char += 10) //Halo1010
console.log(char = char + 10) //Halo1010

//Number
let numA = 2
console.log(numA + 2)//5
console.log(numA - 2)//1
console.log(numA * 2)//6
console.log(numA / 2)//1.5
console.log(numA ** 2)//6

//Increment
numA++ //increment +1
console.log(numA)//3
numA += 2 // sama dengan> numA = numA + 2
console.log(numA)//5

//Decrement
numA--
console.log(numA)//4
numA -= 2
console.log(numA)//2

//Math Object
console.log(Math.PI)//mengetahui nilai PI
console.log(Math.abs(-4.7))//abs positif
console.log(-Math.abs(4.7))//abs negatif
console.log(Math.pow(4, 2))//menghitung angka berpangakat (param1=angkanya, param2=pangkatnya)
console.log(Math.sqrt(16))// mencari akar dari sebuah nilai
console.log(Math.cbrt(8))

//membulatkan angka desimal ke angka terdekat
console.log(Math.round(3.6)) //4
console.log(Math.round(3.3)) //3
console.log(Math.floor(4.97)) //selalu dibulatkan kebawah
console.log(Math.floor(4.2)) //selalu dibulatkan kebawah
console.log(Math.ceil(4.2)) //selalu dibulatkan keatas

console.log(Math.random()) //random 0.0 - 1.0
console.log(Math.max(2, 20, 100)) // 100
console.log(Math.min(2, 20, 100)) // 2

//Object Date
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
let waktu = new Date()
console.log(waktu.getFullYear())
console.log(waktu.getMonth() + 1)
console.log(waktu.getDate())
console.log("Kemarin : ", hari[waktu.getDay() - 1], "Hari ini : ", hari[waktu.getDay()], "Besok : ", hari[waktu.getDay() + 1])

/*
//Comprasion Operators => operasi perbandingan
== : value sama, tapi data type beda
=== : value sama, data type sama
> : lebih dari, > 5 yg terbaca mulai dari 6,7,8...
< : kurang dari, < 5 yg terbaca mulai dari 4,3,2...
>= : lebih dari sama dengan, >= 5 yg terbaca mulai dari 5,6,7,8...
<= : kurang dari sama dengan, <= 5 yg terbaca mulai dari 5,4,3,2...
*/

console.log('A' == 'A')//true
console.log('A' === 'A')//true
console.log('2' == 2)//true
console.log('2' === 2)//false
console.log('2' === '2')//true
console.log(2 < 3)//true
console.log(2 < 2)//false
console.log(2 > 2)//false
console.log(3 > 2)//true
console.log(2 <= 2)//true
console.log(3 >= 3)//true
console.log('a' < 'A')//false (97 < 67)

/*Logical Operator
&& (and) : keduanya harus bernilai TRUE => TRUE
|| (or) : cukup salah satu bernilai TRUE => TRUE
! (not) : membalik sebuah nilai logika
*/

console.log(2 != 'a')//berarti tidak sama dengan

console.log(!(2 < 3 && 3 > 3 || 4 > 2))

//Condition
//If...Else If...Else
//if saja, digunakan ketika ingin mendeteksi hanya 1 kondisi yang mau diprose
if (2 > 1) {

}

//if...else, digunakan ketika ingin mendeteksi 2 kondisi yg berlawanan dan ingin diproses salah satunya
if (4 % 2 == 0) {

} else {

}
//or
//memanfaatkan ternary operator
// conditionnya ? apa yg direturn : returnnya apa
4 % 2 == 0 ?
    2 * 3 > 5 ? console.log('benar') : console.log('salah')
    : console.log('ganjil')


let usia = 25
//if...else if...else if, digunakan jika membutuhkan multiple condition yang spesifik
if (usia < 25) {
    console.log('Remaja')
} else if (usia > 25 && usia < 45) {
    console.log('Dewasa')
} else if (usia > 45 && usia < 75) {
    console.log('Orang Tua')
}

//Switch...case
switch (usia) {
    case 25:
        console.log('remaja')
        break
    case 30:
        console.log('dewasa')
        break
    default:
        console.log('tidak diketahui')
}