/*Class
Second way to create object.
// */

// class car {
//     //constructor bersifat sebagai cetakan
//     constructor(_ban, _mesin, _tipe) {
//         this.ban = _ban,
//             this.mesin = _mesin,
//             this.tipe = _tipe
//     }
// }

// let Honda = new car(2, "V8", "CRV")
// console.log(car)

// function orderWord(str) {
//     let wordToNumber = str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96)
//     let wordA = wordToNumber.join('')
//     console.log(wordA)
//     console.log(typeof (wordA))
//     let sort = wordToNumber.sort((a, b) => a - b)
//     let wordB = sort.join('')
//     console.log(wordB)
//     console.log(typeof (wordB))

//     wordA == wordB ? console.log(`${str} is in order word`) : console.log(`${str} is not in order word`)
// }

function orderWord1(str) {
    var wordToNumber = str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96)
    console.log(wordToNumber)
    console.log(str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96))
    var sort = wordToNumber.sort((a, b) => a - b)
    console.log(sort.join(''))
    console.log(typeof (sort.join('')))
    
    wordToNumber == str.toLowerCase().split('').map(item => item.charCodeAt(0) - 96) ? console.log('yes') : console.log('no')


    wordToNumber.join('') == sort.join('') ? console.log(`${str} is in order word`) : console.log(`${str} is not in order word`)
}
// orderWord('love')
orderWord1('love')