let text = "aKu SeOrAng ProgRAMMER"
let lowcase = ""
for (let i = 0; i < text.length; i++) {
    if (i == 0) {
        lowcase += text.charAt(i).toUpperCase()
    } else if (text.charAt(i - 1) == ' ') {
        lowcase += text.charAt(i).toUpperCase()
    } else {
        lowcase += text.charAt(i).toLowerCase()
    }
}
console.log(lowcase)