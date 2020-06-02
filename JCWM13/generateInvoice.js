var karakter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function invoice(n) {
    var genInvoice = 'TOKOKU_'
    for (let i = 0; i < n; i++) {
        genInvoice += karakter.charAt(Math.floor(Math.random() * karakter.length))
    }
    return genInvoice
}

console.log(invoice(5))