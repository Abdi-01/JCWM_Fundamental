// var x = 'Halobos'
// let num = 3.49
// // console.log(x.length)
// // console.log(x.indexOf('bos'))
// // console.log(x.substr(5,2))
// // console.log(x.slice(1,7))
// console.log(x.replace('Ha','He'))
// console.log(x.replace(/Ha/g,'He'))
// console.log(parseInt(x))
// console.log(num)
// console.log(__dirname)
// console.log(__filename)

// tanyakabar=()=>{
//     var kabar = prompt('Bagaimana kabar hari ini ? ')
//     if (kabar == "baik") {
//         alert("Semoga semakin baik")
//     } else if (kabar == "tidak baik") {
//         alert("Semangat ya!")
//     }
// }
// var text = "Countdown "
// for (var x = 10; x >= 0; --x) {
//     console.log(text + x)
// }
///for loop drawing
// var draw = ""
// for (var x = 1; x <= 5; x++) {
//     for (var j = 1; j <= x; j++) {
//         draw += "  "
//     }
//     for (var i = 5; i >= x; i--) {
//         draw += "# "
//     }
//     for (var i = 5; i >= x; i--) {
//         draw += "# "
//     }
//     draw += "#\n"
// }
// console.log(draw)

// function pangkat(x, y) {
//     if (y == 1) {
//         return x
//     } else {
//         return x = x * pangkat(x, y - 1)
//     }
// }

// console.log(pangkat(7, 3))

// var x = setTimeout(test,3000)
// console.time("Interval")
// setInterval(test,2000)
// function test(){
//     console.log("Halo bro")
//     console.timeEnd("Interval")
//     console.time("Interval")
// }
// clearTimeout(test)
// console.log("Halo bos")

///ARRAY
// let mobil =["Pajero", "Rush", "Ferrari"]
// console.log(mobil[0])
// console.log(mobil[1])
// console.log(mobil[2])
// console.log(mobil.toString())
// console.log(mobil.join(' * '))

// let motor =["Vario", "Nmax", "Scoopy"]
// motor.push(`Ninja`)
// console.log(motor) 
// // motor.splice(0,1, 'Mio', 'Beat')
// let m=motor.slice(1)
// // delete motor[1]
// console.log(m)

// const pi = 22 / 7
// var r = 10
// let luas_lingkaran = pi * Math.pow(r, 2)
// let keliling_lingkaran = pi * r * 2
// console.log("Luas Lingkaran =", luas_lingkaran)
// console.log("Keliling Lingkaran =", keliling_lingkaran)

// var angka = 23.53
// var angka2 = "22.7"
// var huruf = "aa"
// console.log("String -->", String(angka))
// console.log("toString() -->", typeof (angka.toString()))
// console.log("Number -->", Number(angka2))
// console.log("parseInt -->", 30)
// console.log("Number -->", Number(huruf))

// //operator
// var x = 5
// var y = 3
// var plus = x + y
// var minus = x - y
// var devided = x / y
// var multiply = x * y
// var exponential = x ** y

// console.log(plus)
// console.log(minus)
// console.log(devided)
// console.log(multiply)
// console.log(exponential)

// // unary operator : +,-,++(increment),--(decrement)
// var z = 15
// var unaryPos = +z
// var unaryNeg = -z
// console.log(unaryPos)
// console.log(unaryNeg)
// z--
// console.log(z)
// // console.log(z--)
// var x = 1, y = 2, z = 3
// console.log(x, y, z)

//lingkaran
// const pi = 22 / 7
// var r = 2
// let luas_lingkaran = pi *  r ** 2//Math.pow(r, 2)
// let keliling_lingkaran = pi * r * 2
// console.log("Jari-jari lingkaran =", r)
// console.log("pi lingkaran =", pi)
// console.log("Luas Lingkaran =", luas_lingkaran)
// console.log("Keliling Lingkaran =", keliling_lingkaran)

//Number comparison
// console.log("Number comparison")
// console.log(5 > 2)
// console.log(5 < 2)
// console.log(5 != 2)

// var a = "aku"
// switch (a) {
//     case "aku":
//         return console.log("ini aku")
//     case "kamu":
//         return console.log("itu kamu")
//     default:
//         return console.log("Siapa saja ?")
// }

// //Triangle
// console.log("Triangle")
// var symD = ""
// let count = 1
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         symD += `${count} `
//         count ++
//     }
//     if (i < 5) {
//         symD += "\n"
//     }
// }
// console.log(symD)

// var fruits = ["Mangga", "Apel"]
// fruits.push("Jeruk")
// console.log(fruits)

//hitung poin pertandingan bola
// var games = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]
// function points(games) {
//     var count = 0
//     for (let i = 0; i < games.length; i++) {
//         if (games[i].split(':')[0] > games[i].split(':')[1]) {
//             count += 3
//         } else if (games[i].split(':')[0] < games[i].split(':')[1]) {
//             count += 0
//         } else if (games[i].split(':')[0] == games[i].split(':')[1]) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log("Jumlah poin pertandingan : ", points(games))

//generate initial name
// let text = "Susilo Bambang yudhoyono"
// function initialName(name) {
//     let initial = ""
//     for (let i = 0; i < name.length; i++) {
//         if (i == 0) {
//             initial += name.charAt(i).toUpperCase()
//         } else if (name.charAt(i - 1) == ' ') {
//             initial += '.' + name.charAt(i).toUpperCase()
//         }
//     }
//     return initial
// }
// console.log(text+' =>',initialName(text))

//hitung nilai positif
// let angka = [1, -2, 3, -9, 4]
// function positiveSum(arr) {
//     var sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// console.log(positiveSum(angka))

//count vokal
// var kata = "Aku Seorang Coder"

// let b = ''
// for (let i = 0; i < kata.length; i++) {
//     if (kata.charAt(i).toLowerCase() == 'a' || kata.charAt(i).toLowerCase() == 'i' || kata.charAt(i).toLowerCase() == 'u' || kata.charAt(i).toLowerCase() == 'e' || kata.charAt(i).toLowerCase() == 'o') {
//         if (!b.includes(kata.charAt(i).toLowerCase())) {
//             b += kata.charAt(i).toLowerCase()
//         }
//     }
// }
// console.log(kata)
// console.log(b)
// console.log(b.length)

//palindrom
// var polin = "Radar"
// if(polin.split('').reverse().join('').toLowerCase() == polin.toLowerCase()){
//     console.log('Kata ini polindrom ', polin.split('').reverse().join(''))
// }

// var email = "purwadhika@mail.com"
// if(email.includes('@')){
//     console.log('Ini email')
// }else{
//     console.log('Ini bukan email')
// }

// function getDrinkByProfession(param) {
//     var newParam = ""
//     var output = ""
//     var drink = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal", "Beer"]
//     var profession = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"]
//     for (let i = 0; i < param.length; i++) {
//         if (i == 0 || newParam.charAt(i - 1) == ' ') {
//             newParam += param.charAt(i).toUpperCase()
//         } else {
//             newParam += param.charAt(i).toLowerCase()
//         }
//     }
//     // var output = ''
//     if (profession.includes(newParam)) {
//         profession.map((item, index) => {
//             if (newParam == item) {
//                 output = drink[index]
//             }
//         })
//     } else {
//       output = "Beer"
//     }
//     return output
// }

// console.log(getDrinkByProfession("jabrOni"))
// var count = 1
// function counter() {
//     if (count <= 100) {
//         console.log(count)
//         count++
//     } else {
//         clearInterval(counter)
//     }
// }

// setInterval(counter, 1000);
// if(count<=100){
// }

// let limit = 5
// console.log("\nTriangle Piramid")
// var symE = ""
// for (let i = 1; i <= limit; i++) {
//     //loop untuk membuat segitiga pertama dengan spasi
//     for (let j = limit; j > i; j--) {
//         symE += " "
//     }
//     if(i%2==0){
//         for (let j = 1; j <= i; j++) {
//             symE += `${j} `
//         }
//     }else{
//         for (let j = 1; j <= i; j++) {
//             symE += `* `
//         }
//     }
//     // if (i < limit) {
//     symE += "\n"
//     // }
// }
// console.log(symE)

//Box
// console.log("Box")
// var symC = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if(i==j){
//             symC += `${i} `
//         }else{
//             symC += `0 `
//         }
//     }
//     if (i < 5) {
//         symC += "\n"
//     }
// }
// console.log(symC)

// let user = [
//     {
//         nama: 'Admin01',
//         role: 'admin',
//         usia :20
//     },
//     {
//         nama: 'Budi',
//         role: "user",
//         usia:30
//     },
//     {
//         nama: 'Andi',
//         role: "user",
//         usia:15
//     }
// ]
// var success = ''
// var arrUser = user.map((item,index)=>{
//     return item.usia * 2
// })

// // console.log(arrUser)

// console.log(user.filter((item) => item.nama == "Budi" && item.role == "user"))

// user.map(function (item, index) {
//     if (item.nama == "Budi" && item.role == 'user') {
//         success = 'OK'
//     }
// })

// user.filter((item) => { if (item.nama == "Budi" && item.role == "user") { } })
// console.log(success)
// let produk = [
//     {
//         nama: 'Oreo',
//         harga: 8000,
//         stock: 20
//     },
//     {
//         nama: 'Chitato',
//         harga: 7000,
//         stock: 25
//     },
//     {
//         nama: 'Pocari',
//         harga: 6500,
//         stock: 15
//     }
// ]
// class inProduct {
//     constructor(nama, harga, stock) {
//         this.nama = nama,
//             this.harga = harga,
//             this.stock = stock
//     }
// }
// var add = new inProduct("newProduct", "newHarga", "newStock")
// produk.push( add )
// console.log(produk)

// let date = new Date(2020, 4)
// let startDay = date.getDay() + 1
// let totalDays = new Date(2020, 5, 0).getDate()

// console.log(date)
// console.log(startDay)
// console.log(totalDays)

// var objN = {
//     name: 'Adi',
//     age: 20,
//     single: true
// }

// for (let key in objN) {
//     console.log('Property', key)
//     console.log('Value of Property', objN[key])
// }

// let hole = [
//     { holeSnake: ["python", "cobra", ["toHole", { eat: "mouse" }]] }
// ]

// console.log(hole[0].holeSnake[2][1].eat)

// let motor = ["Vario", "Nmax", "Scoopy"]

// motor.join('') === motor.join('') ? console.log('yes') : console.log('no')

// /////////////MAKE SET INTERVAL////////////
// var mySetInterval = (cbfn, time) => {
//     console.time()
//     for (var i = 0; i < time * 10000000; i++) {
//         if (i % (time * 150000) == 0) {
//             console.timeEnd()
//             cbfn()
//             console.time()
//         }else{
//         }
//     }
// }

// mySetInterval(()=>console.log('a'),2000)

// let array = [2, 3, 2, 4, 12, 1];
// function duplicateMap(array) {
//     let result = []

//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i] * array[i])
//     }

//     return result
// }

// console.log( duplicateMap(array))

// How to make function with parameter : 
// myFunc = (a) => { console.log(a) }
// b. function myFunc(){console.log(myFunc)}
// var myfunc = function (a) { console.log(a) }
// myfunc('aa')

// let hole = [{holeSnake:["python","cobra",["toHole",{eat:["mouse","frog","snake"]}] ]}]

// console.log(hole[0].holeSnake[2][1].eat[0])

// console.log(typeof Infinty, typeof NaN, typeof null)
// console.log(myFunc)

///////////////////////SELECTION SORT array of object/////////////////////////////////// sort 
const singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
];
var arrC = [2, 6, 4, 10, 5, 1, 3, 7]
var sortB = (arr, cbfn) => {
    for (k = 0; k < arr.length; k++) {//berhenti sebelum melebihi index
        for (l = k + 1; l < arr.length; l++) {
            // hasil = cbfn(typeof (arr[k].name) === 'string' ? arr[k].name.charCodeAt(0) : arr[k].name, typeof (arr[l].name) === 'string' ? arr[l].name.charCodeAt(0) : arr[l].name)//membandingkan setiap item dengan semua item satu persatu
            hasil = cbfn(typeof (arr[k]) === 'string' ? arr[k].charCodeAt(0) : arr[k], typeof (arr[l]) === 'string' ? arr[l].charCodeAt(0) : arr[l])//membandingkan setiap item dengan semua item satu persatu
            if (hasil > 0) {
                [arr[k], arr[l]] = [arr[l], arr[k]]
            }
        }
    }
    return arr
}

var asc = sortB(arrC, (a, b) => { return a - b })
console.log('asc', asc)