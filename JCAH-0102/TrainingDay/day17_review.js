//Looping -> perulangan
/*
Javascript : 
a. while (condition)
b. do{ }while(condition)
c. for(statement1;statemen2;statement3){}
*/

let value = 0
let keyLoop = true
//While Loop
while (keyLoop) {
    value++
    console.log(value)
    if (value == 20) {
        keyLoop = false
    }
}

//DO...WHILE
let num = 0
do {
    console.log(num)
    num++
} while (num <= 10)


//For Loop
let data = 'Data'
let i
for (i = 0; i <= 9; i++) {
    console.log(data + i)
}

//Array -> tipe data objek yang mampu menyimpan lebih dari satu data
/**
 * Sifat Array
 * - Bisa berisi bebrbagai macam data
 * - Data diakses berdasarkan index lokasinya
 */

// cara 1
let mobil = ['BMW', 'Mercedess', 'Toyota']
// cara 2
let angka = new Array(6, 5, 1, 2, 3, 4)
//array length variable mobil = 3
//index pada array selalu dimulai dari index ke 0
console.log(mobil[1])
console.log(mobil[2])
console.log(mobil[3])

console.log(mobil.toString())//merubah data array menjadi string
console.log(mobil.join(''))//menggabungkan data array dan menjadikannya string
console.log(angka.join())

//akses array menggunakan while
// let j = 0
// do {
//     console.log(angka[j])
//     j++
// } while (j < angka.length);

console.log(angka.length)
// console.log(angka.sort()) //mengurutkan element array asc
console.log(angka.reverse()) //membalikkan urutan element array
console.log(mobil.indexOf('BMW'))// mencari index berdasarkan element reference

console.log(mobil)
mobil.push('Mazda') //menambahkan element baru pada akhir array
console.log(mobil)
mobil.pop() //menghapus element wakhir array
console.log(mobil)
mobil.unshift('Mazda') //menambahkan element baru pada awal array
console.log(mobil)
mobil.shift() //menghapus element awal array
console.log(mobil)

// mobil.splice(1, 0, 'Daihatsu','ISUZU')
// console.log(mobil)

// let mobil2 = mobil.slice(1,3)
// console.log(mobil2)

//Concat => menggabungkan data dari array yg berbeda
//Cara 1
let merge = angka.concat(mobil)
console.log(merge)
//Cara 2
let mergeB = [...angka, ...mobil]
console.log(mergeB)


//function
// function namaFunc(param1, param2) {
//program
// }
// cara menjalankan function
// memanggil nama functionnya
// namaFunc(argument1,argument2) => argument adalah data yang akan mengisi parameter
// posisi argument harus sesuai dengan nama parameter yg mau diisi
function contoh(param1 = 2, param2 = 3) {
    console.log(param1, param2)//output proses dalam fungsi
    return 1 //output hasil dari fungsi atau nilai balik yg akan diproses ulang
}

let jmlh = 1 + contoh('Hello', 'World')
console.log(jmlh)

//Arrow function
example = (prm1, prm2) => {
   let z = prm1 + prm2
    return z
}

console.log(example(2, 3))
console.log(z)

