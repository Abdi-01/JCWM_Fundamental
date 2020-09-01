//Variable : sebuah media untuk menyimpan data
//Keyword variable ada 3 : var, let, const
//Data yang disimpan dalam variable : string(ditandai ""/'/`'), number(int/float), boolean(true/false), object({},[])

var nama //deklarasi
nama = "bob"

var usia = 20 //inisialisasi
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
