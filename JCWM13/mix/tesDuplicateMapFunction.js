function duplicateMap(){
let array = [2, "test", false, true, 12, "ok"];
let result = []

for (let i = 0; i < array.length; i++){
    result.push(array[i] * array [i])
}

console.log(result)
console.log(array)

// FUNCTION MAP ASLI (SEBAGAI PEMBUKTIAN)
let arrayNew = [2, "test", false, true, 12, "ok"];
let newArr = arrayNew.map((num) => num * num);

console.log(arrayNew)
console.log(newArr)
}