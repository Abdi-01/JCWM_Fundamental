var number = 2
do {
    var count = 0 
    for (let i = 2; i <= number; i++) {
        if (number % i == 0) {
            count++ //menghitung ada berapa bilangan i yg jika dimodulus dengan number hasilnya 0
        }
    }
    if (count == 1) {
        console.log(number, "Bilangan prima")
    }
    number++
} while (number <= 50);