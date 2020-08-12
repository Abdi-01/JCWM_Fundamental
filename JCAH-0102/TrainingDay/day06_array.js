/* ARRAY
	1. Array : merupakan wadah yang berisi sekumpulan data dengan tipe yg sama ataupun berbeda. Dan setiap datanya mempunyai index
	2. Memperudah pengelolaan dalam penelusuran 
	3. Managemen memori
	4. Variabel jamak yg mempunyai elemen dgn mengacu nama yg sama dan dibedakan index
	5. Indexnya bertipe data integer
	6. Array bertipe object
	7. Elemen array boleh bertipe beda 
	8. Method array (method : func pda object)
		a. length : menghitung jumlah banyak data didalam array
		b. Join(separator, defaultnya ","/bisa kosong) : menggabungkan semua isi array menjadi sebuah string
		c. Push() : digunakan utk menambah item baru diakhir array
		d. Pop() : menghapus item terakhir
		e. unshift() : menambahkan elemen baru di awal array
        f. Shift() : menghapus elemen pertama
        g. reverse : membalikkan value
        h. splice(indexAwal, Mau dihapus berapa,elementBaru1...)
*/

//Membuat data array
let buah = ["Apel", "Jeruk", "Mangga", "Alpukat"]
let stock = Array(10, 15, 20, 5)
let harga = []
harga[0] = 5000
harga[1] = 3500
harga[2] = 4500
harga[3] = 10000
// console.log(harga[1]) // [ 5000, <1 empty item>, 3500 ]
// console.log(buah[0], stock[0], harga[0])//Apel 10 5000
// console.log(buah[1], stock[1], harga[1])//Jeruk 15 3500
// console.log(buah[2], stock[2], harga[2])//Mangga 20 4500
// console.log(buah[3], stock[3], harga[3])//Alpukat 5 10000
// console.log(buah.length) // untuk mengetahui jumlah data

// console.log(buah.toString())//Merubah item array menjadi string
// console.log(buah.join(" - "))//menggabungkan item array menjadi string dengan menentukan sparator

// console.log("Purwadhika".split('w'))// merubah string menjadi sebuah array berdasarkan sparatornya

// let mobil = ["BMW", "Lexus",
//     ["E36", "LX330",
//         ["Toyota", "Ayla"]
//     ]
// ]
// console.log(mobil[2][2][1])
// console.table(mobil)
let angka = [1, 2, 3, 4]
// for (let i = 0; i < angka.length; i++) {
//     // console.log(angka[i] + 1)
// }

//Property sort, reverse dan indexOf
let daftarSiswa = ["Anton", "David", "Beni", "Gilang"]
let absen = [2, 9, 10, 1]
// console.log(daftarSiswa.sort())//mengurutkan secara ASC, tetapi hanya membandingkan character pertamnya saja disetiap item array
// console.log(absen.sort())
// console.log(nama.split('').reverse().join(''))
// console.log(daftarSiswa.indexOf("David"))//mencari lokasi index

// POP dan PUSH
// console.table(daftarSiswa)
// daftarSiswa.push("Bima")//Menambahkan item kedalam sebuah array
// console.table(daftarSiswa)
// daftarSiswa.pop()
// console.table(daftarSiswa)

// daftarSiswa.unshift("Budi")
// console.table(daftarSiswa)
// daftarSiswa.shift()
// console.table(daftarSiswa)
// delete daftarSiswa[0]
// console.log(daftarSiswa)
// console.log(daftarSiswa.length)

// daftarSiswa.splice(1, 1)//parameter 1 : indexnya, parameter 2 :jumlah data yg mau dihapus
// daftarSiswa.splice(1, 1, "Ade", "Adnan", "Alex")//parameter 1 : indexnya, parameter 2 :jumlah data yg mau dihapus,prameter 3: data yg baru
// console.log(daftarSiswa)

// let daftarBaru = daftarSiswa.slice(1, 4)//mengambil data berdasarkan awalan dan akhiran index
// console.log(daftarBaru)

let mobil = ["BMW", "Ferrari", "Mustang"]

// let dftrMobil = mobil.concat(mobilAsia)
// let dftrMobil = [...mobil, ...mobilAsia] //Merging menggunakn metode distrcutering

// let mobilNew = [...mobil]
// mobilNew.pop()
// console.log(mobil)
// console.log(mobilNew)

//Fungsi pada array yg sering digunakan : 
/*
map(), forEach(), filter(), reduce()
*/
let mobilAsia = ["Mazda", "Toyota", "Honda"]

//MAP : untuk memproses semua item yang ada didalam array, dan memberikan nilai balik/return
let list = mobil.map(function (item, index) {
	return `Daftar mobil ${index + 1}. ${item}`
})

//forEach : untuk memproses semua item yang ada didalam array tetapi tidak bisa memberikan nilai balik
let listAsia = mobilAsia.forEach(function (item, index) {
	return `Daftar mobilAsia ${index + 1}. ${item}`
})

//Filter : untuk mencari data yang sesuai berdasarkan kondisi dan menampilkannya menjadi array baru
let filter = mobilAsia.filter(function (item, index) {
	return item.length > 5
})

//Reduce : berfungsi untuk menggabungkan atau menjumlah suatu data pada array
let value = [2, 3, 4, 5]
let rdc = value.reduce(function (val, item) {
	return val + item
}, 0)

// console.log(rdc)
// let str = ""
// let count = 1
// for (let i = 1; i <= 5; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		str += count + " "
// 		count++
// 	}
// 	str += "\n"
// }

// console.log(str)
