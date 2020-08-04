var str = ''
var arr = [12, 9, 20, 12, 1, 13, 4, 5, 2, 3, 7, 8, 9, 1, 2, 3, 54, 32, 1,1,1,1]

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i == 0 && arr[j] % 2 == 0) {
            str += `${arr[j]}  `
        }
        else if (i == 2 && arr[j] % 2 != 0) {
            str += `  ${arr[j]}`
        }
        if (i == 1) {
            str += j % 2 == 0 ? '- ' : '-- '
            if (j == arr.length - 1) str += "Jalan Tamrin"
        }
    }
    str += '\n'
}

console.log(str)