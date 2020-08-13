/*
Object : penampung data seperti array tetapi datanya tidak berurutan seperti index

let obj = {
    nama_prototype : isidatanya,
    nama_prototype : "String",
    nama_prototype : number,
    nama_prototype : boolean,
    nama_prototype : [array],
    nama_method : function(params){block code}
}

cara memanggil datanya ditandai dengan "."
example : nama_variable.nama_prototype
*/
//Membuat object secara literal
let orang = {
    namaDpn: "Abdi", namaBlk: "Alghi", usia: 24, pekerjaan: "Coder",
    fullName: function () {
        return this.namaDpn + " " + this.namaBlk
    }
}

console.table(orang)
// console.log(orang.nama)
console.log(orang.fullName())

//Membuat object menggunakan keyword new function Object()
let mobil = new Object()
mobil.nama = "Innova"
mobil.produsen = "Toyota"
mobil.harga = 350000000

console.table(mobil)

//Membuat object menggunakan Class
class Hewan {
    constructor(_name, _jenis, _makanan) {
        this.name = _name
        this.jenis = _jenis
        this.makanan = _makanan
        // console.log(this.name);
    }
}
//Inheritance ==> pewarisan
class Reptil extends Hewan {
    constructor(_name, _jenis, _makanan, _panjang) {
        super(_name, _jenis, _makanan)
        this.panjang = _panjang
    }
}

let Cobra = new Reptil("King Cobra", "Ular Berbisa", "Ular", 5)
console.log(Cobra)

let siswa = { name: "Prass", kelas: "IPA 3", nilai: [80, 95, 70, { remed: 70 }] }
siswa.pelajaranFavorit = "Matematika" //menambahkan properties baru
// delete siswa.nilai
console.log(siswa.nilai[3].remed)
// let pelajarnSiswa = { ...siswa, ...pelajaran }
console.log(`Nama saya ${siswa.name} kelas saya ${siswa.kelas}`)

console.log(siswa["name"])
//sama dengan
console.log(siswa.name)

//looping dalam object
for (let key in siswa) {
    console.log(siswa[key])
}

for (let i = 0; i <= siswa.nilai.length; i++) {
    console.log(siswa.nilai[i])
}

let produk = [
    { name: "Hoodie", size: ["M", "L", "XL"], stock: 10, price: 10000 },
    { name: "Parka", size: ["M", "L", "XL"], stock: 4, price: 15000 },
    { name: "Tshirt", size: ["M", "L", "XL"], stock: 10, price: 20000 },
    { name: "Shirt", size: ["M", "L", "XL"], stock: 12, price: 40000 }
]

produk.map(function (item, index) {
    let size = item.size.map(function (item, index) {return item + " " })
    console.log(`${index + 1}. ${item.name} Size : ${size} Stock : ${item.stock} Rp. ${item.price}`)
})