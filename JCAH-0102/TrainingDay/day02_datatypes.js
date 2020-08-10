//DATA TYPE

let name = "Abdi" //STRING
let umur = 12 //NUMBER
let absen = true //BOOLEAN
let dompet //UNDEFINED
let bensin = null //NULL

// console.log('Tipe data variable name : ', typeof name)
// console.log('Tipe data variable umur : ', typeof umur)
// console.log('Tipe data variable absen : ', typeof absen)
// console.log('Tipe data variable dompet : ', typeof dompet)
// console.log('Tipe data variable bensin : ', typeof bensin)

//String
let x = "Halo Boskuu"

// console.log('Panjang String/Text : ', x.length) // jumlah string didalam variable
// console.log('Mencari index :', x.indexOf('B')) // index selalu dimulai dari 0
// console.log(x.substr(5, 3)) // mengambil text berdasarkan index dan jumlah yg diambil berapa
// console.log(x.slice(5, 8)) // mengambil text berdasarkan dua parameter index
// console.log(x.split('')) // memisahkan bagian dari string dan menampungnya kedalam sebuah array

let y = 'halo'
let z = 'DUNIA'
let angka = 1234

let upper = y.toUpperCase()
// console.log(upper)// merubah text menjadi uppercase
// console.log(z.toLowerCase())// merubah text menjadi lowercase

// console.log(y.replace('ha', 'mi'))
// console.log(y.replace(/ha/g, 'mi'))

// console.log(angka)
// console.log(angka.toString())//mengkonfersi number menjadi string

let value = '2020'
let decimal = '1.7'

let kata = "Halo Dunia"

// console.log(value)
// console.log(parseInt(value))
// console.log(parseFloat(value))

// console.log(parseInt(decimal))
// console.log(parseFloat(decimal))

// console.log(parseInt(kata))

//NUMBER
//Arithmatics Operation

let usiaA = 40
let usiaB = 20

// console.log(`Penjumlahan ${usiaA} + ${usiaB}=`, usiaA + usiaB)
// console.log('Pengurangan ', usiaA - usiaB)
// console.log('Perkalian ', usiaA * usiaB)
// console.log("Pembagian ", usiaA / usiaB)
// console.log("Modulus ", usiaA % usiaB)
// console.log(usiaA ** usiaB)

usiaA++ //increment +1
++usiaA
usiaB += 5
// console.log("increment", usiaA)
// console.log("increment", usiaB)

usiaA--
usiaB -= 3
// console.log("decrement 1", usiaA)
// console.log("decrement 3", usiaB)

// console.log(Math.PI)
// console.log(Math.abs(-4.7))
// console.log(Math.pow(8, 3))
// console.log(Math.sqrt(64)) //akar kuadrat
// console.log(Math.cbrt(512)) // akar pangkat 3

// console.log(Math.round(4.7)) // pembulatan terdekat
// console.log(Math.round(4.3))
// console.log(Math.floor(4.9)) //pembulatan kebawah
// console.log(Math.ceil(4.2)) // pembulatan keatas

// console.log(Math.max(0, -1, 20, 100))
// console.log(Math.min(0, -1, 20, 100))
// console.log(Math.random() * 10)

//Fungsi Date

let waktu = new Date()

// console.log(waktu.getFullYear())
// console.log(waktu.getMonth()) // bulan 0-11
// console.log(waktu.getDate()) // tanggal 1-31
// console.log(waktu.getDay()) // 0-6 ->> start from sunday
// console.log(waktu.getHours()) // Jam
// console.log(waktu.getMinutes()) // Minute
// console.log(waktu.getSeconds()) // Seconds


// switch (true) {
//     case 2 == 2:
//         console.log('2')
//         break;
//     default:
//         break;
// }