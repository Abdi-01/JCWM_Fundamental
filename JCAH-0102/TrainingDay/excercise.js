//Mencari huruf tengah
function Tengah(string) {
    var output = string.split('')
    for (i = 0; i <= output.length; i++) {
        if (output.length % 2 != 0) {
            var hasil = output.length / 2
            return output[Math.floor(hasil)]
        }else{
            var hasil = output.length / 2
            return output[hasil-1]+output[hasil]
        }
    }
}
console.log(Tengah('Sakit'))

