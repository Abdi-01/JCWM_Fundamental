let count = 20
for (let i = 1; i <= count; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "BizzBuzz")
    }else if (i % 3 == 0) {
        console.log(i, "Bizz")
    }
    else if (i % 5 == 0) {
        console.log(i, "Buzz")
    }
}