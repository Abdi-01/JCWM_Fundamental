//Menyimpan data user
let dbUser = [
    {
        username: "Admin",
        email: "admin@mail.com",
        password: "admin",
        role: "admin",
        keranjang: []
    },
    {
        username: "Aldo",
        email: "aldo@mail.com",
        password: "aldo",
        role: "user",
        keranjang: []
    }
]

//Menyimpan data produk
let dbProduk = [
    {
        idProduk: 1,
        namaProduk: "Good Time",
        foto: "http://arnotts.co.id/images/image-goodtime/good_time_1550214863.png",
        deskripsi: "Biskuit nikmat diwaktu yang tepat",
        stock: 20,
        harga: 6500
    },
    {
        idProduk: 2,
        namaProduk: "Oreo",
        foto: "https://static.republika.co.id/uploads/images/inpicture_slide/oreo-supreme-tidak-dijual-secara-resmi-di_200514190509-631.png",
        deskripsi: "Oreo bikin jadi SULTAN",
        stock: 15,
        harga: 30000
    }
]

let dbKeranjang = []

//Menyembunyikan tampilan menu
document.getElementById("regis-page").style.display = "none"
document.getElementById("login-page").style.display = "none"
document.getElementById("addProduct-page").style.display = "none"
document.getElementById("produk-page").style.display = "none"
document.getElementById("cart-page").style.display = "none"

//penampung index user yg login
let userLogin = null

//Penampung total payment
let totalPayment

//kofigurasi button keluar
document.getElementById("btKeluar").disabled = true

//Blue print object data user
class DB_User {
    constructor(_username, _email, _password) {
        this.username = _username;
        this.email = _email;
        this.password = _password;
        this.role = "user";
        this.keranjang = []
    }
}

class DB_Produk {
    constructor(_idProduk, _namaProduk, _foto, _deskripsi, _stock, _harga) {
        this.idProduk = _idProduk;
        this.namaProduk = _namaProduk;
        this.foto = _foto;
        this.deskripsi = _deskripsi;
        this.stock = _stock;
        this.harga = _harga;
    }
}

class DB_Keranjang {
    constructor(_id, _namaProduk, _foto, _qty, _price) {
        this.id = _id;
        this.namaProduk = _namaProduk;
        this.foto = _foto;
        this.qty = _qty;
        this.price = _price;
        this.priceTotal = _price * _qty
    }
}

////////////////////////////REQUIREMENT USER//////////////////////////////
//Fungsi menu utama
btMenu = (menu) => {
    if (menu == "regis") {
        document.getElementById("regis-page").style.display = "block"
        document.getElementById("login-page").style.display = "none"
    } else if (menu == "login") {
        document.getElementById("login-page").style.display = "block"
        document.getElementById("regis-page").style.display = "none"
    }
}

//Fungsi regis
btRegis = () => {
    let form = document.getElementById("formRegister")
    let cek = dbUser.filter((item, index) => {
        return item.username.toLowerCase().includes(form.elements[0].value.toLowerCase())
    })
    // console.log("Cek input register : ", form.elements[0].value, form.elements[1].value, form.elements[2].value)
    if (form.elements[0].value == '' || form.elements[1].value == '' || form.elements[2].value == '') {
        alert("Tolong isi semua form yang ada")
    } else {
        if (cek.length == 0) {
            if (form.elements[1].value.includes('@')) {
                if (form.elements[2].value.length >= 4) {
                    dbUser.push(new DB_User(form.elements[0].value, form.elements[1].value, form.elements[2].value))
                    console.table(dbUser)
                } else {
                    alert("Password Anda Terlalu Pendek")
                }
            } else {
                alert("Email Salah")
            }
        } else {
            alert("Username Sudah Digunakan")
        }
    }
}

//Fungsi login
btLogin = () => {
    let getUsername = document.getElementById("loginName").value
    let getPassword = document.getElementById("loginPass").value
    console.log("Cek input login :", getUsername, getPassword)

    if (getUsername != '' || getPassword != '') {
        dbUser.forEach((item, index) => {
            if (item.username == getUsername && item.password == getPassword) {
                userLogin = index
                console.log(index)
                alert(`Selamat Datang ${item.username} 😃`)
                document.getElementById("btKeluar").disabled = false
                document.getElementById("btMasuk").disabled = true
            }
        })
        if (userLogin != null) {
            if (dbUser[userLogin].role == "admin") {
                alert("Kamu Admin")
                document.getElementById("addProduct-page").style.display = "block"
                document.getElementById("produk-page").style.display = "block"
                document.getElementById("cart-page").style.display = "none"
                printProduk()
            } else if (dbUser[userLogin].role == "user") {
                alert("Kamu User")
                document.getElementById("addProduct-page").style.display = "none"
                document.getElementById("produk-page").style.display = "block"
                document.getElementById("cart-page").style.display = "block"
                printProduk()
            }
        } else {
            alert("Maaf Akun Anda Belum Terdaftar 🙅‍♂️")
        }
    } else {
        alert("Tolong isi semua form yang ada")
    }
}

btKeluar = () => {
    userLogin = null
    document.getElementById("btKeluar").disabled = true
    document.getElementById("btMasuk").disabled = false
    document.getElementById("addProduct-page").style.display = "none"
    document.getElementById("produk-page").style.display = "none"
    document.getElementById("cart-page").style.display = "none"
}

//////////////////////////REQUIREMENT PRODUK////////////////////////////////
btTambahProduk = () => {
    let formProduk = document.getElementById("formProduk")
    if (formProduk.elements[0].value == '' || formProduk.elements[1].value == '' || formProduk.elements[2].value == '' || formProduk.elements[3].value == '' || formProduk.elements[4].value == '') {
        alert("Isi semua form")
    } else {
        //membuat id produk dari panjang/length dbProduk + 1
        dbProduk.push(new DB_Produk(dbProduk.length + 1, formProduk[0].value, formProduk[1].value, formProduk[2].value, parseInt(formProduk[3].value), parseInt(formProduk[4].value)))
        printProduk()
        console.table(dbProduk)
    }
}

printProduk = (idx, dataProduk = dbProduk) => {
    let tableElement = ''
    dataProduk.forEach((item, index) => {
        if (idx == index) {
            tableElement += `
            <tr>
            <td>${index + 1}</td>
            <td><input type="text" id="fotoBaru" placeholder="Foto Produk Baru" value="${item.foto}"/></td>
            <td><input type="text" id="namaBaru" placeholder="Nama Produk Baru" value="${item.namaProduk}"/></td>
            <td><input type="text" id="deskripsiBaru" placeholder="Deskripsi Baru" value="${item.deskripsi}"/></td>
            <td><input type="number" id="stockBaru" placeholder="Stock Baru" value="${item.stock}"/></td>
            <td><input type="number" id="hargaBaru" placeholder="Nama Produk Baru" value="${item.harga}"/></td>
            <td><button type="button" onclick="btSimpan(${index})">Simpan</button><button type="button" onclick="printProduk()">Batal</button></td>
            </tr>    `
        } else {
            tableElement += `
            <tr>
            <td>${index + 1}</td>
            <td><img src="${item.foto}" width="120px" alt="foto_produk"/></td>
            <td>${item.namaProduk}</td>
            <td>${item.deskripsi}</td>
            <td>${item.stock}</td>
            <td>Rp. ${item.harga.toLocaleString()}</td>
            <td>
            ${
                dbUser[userLogin].role == "user" ?
                    `<button type="button" onclick="btAddToCart(${index})">Add to cart 🛒</button>`
                    :
                    `<button type="button" onclick="btEditProduk(${index})">Edit 🔧</button><button type="button" >Hapus 🗑</button>`
                }
            </td>
            </tr>`
        }
    })

    console.table(dbProduk)
    document.getElementById("listProduk").innerHTML = tableElement
}



btDeleteProduk = idx => {
    dbProduk.splice(idx, 1)
    printProduk()
}

btEditProduk = (idx) => {
    console.log("Index data : ", idx)
    printProduk(idx)
}

btSimpan = (idx) => {
    dbProduk[idx].foto = document.getElementById("fotoBaru").value
    dbProduk[idx].namaProduk = document.getElementById("namaBaru").value
    dbProduk[idx].deskripsi = document.getElementById("deskripsiBaru").value
    dbProduk[idx].stock = parseInt(document.getElementById("stockBaru").value)
    dbProduk[idx].harga = parseInt(document.getElementById("hargaBaru").value)
    printProduk()
}

btCariProduk = () => {
    let pencarian = dbProduk.filter((item, index) => {
        return item.namaProduk.toLowerCase().includes(document.getElementById("cariProduk").value.toLowerCase())
    })
    console.log(pencarian)
    printProduk(null, pencarian)
}

btCariStock = () => {
    let minStock = parseInt(document.getElementById("minStock").value)
    let maxStock = parseInt(document.getElementById("maxStock").value)
    let cariStock = dbProduk.filter((item, index) => {
        return item.stock >= minStock && item.stock <= maxStock
    })

    printProduk(null, cariStock)
}

btCariHarga = () => {
    let minHarga = parseInt(document.getElementById("minHarga").value)
    let maxHarga = parseInt(document.getElementById("maxHarga").value)
    let cariHarga = dbProduk.filter((item, index) => {
        return item.harga >= minHarga && item.harga <= maxHarga
    })

    printProduk(null, cariHarga)
}

btSortData = () => {
    let sortParam = document.getElementById("sortData").value
    let printSort = dbProduk.sort((a, b) => {
        if (sortParam == "namaAsc") {
            if (a.namaProduk < b.namaProduk) { return -1 }
            if (a.namaProduk > b.namaProduk) { return 1 }
            return 0
        } else if (sortParam == "hargaAsc" || sortParam == "hargaDsc") {
            return sortParam == "hargaAsc" ? a.harga - b.harga : b.harga - a.harga
        } else if (sortParam == "stockAsc" || sortParam == "stockDsc") {
            return sortParam == "stockAsc" ? a.stock - b.stock : b.stock - a.stock
        }
    })

    printProduk(null, printSort)
}

/////////////////////////REQUIREMENT TRANSACTION////////////////////////////////
btAddToCart = (idx) => {
    let getQty = parseInt(prompt("Masukkan Qty : "))
    dbProduk[idx].stock -= getQty
    dbKeranjang.push(new DB_Keranjang(dbProduk[idx].idProduk, dbProduk[idx].namaProduk, dbProduk[idx].foto, getQty, dbProduk[idx].harga))
    console.table(dbKeranjang)
    printProduk()
    printKeranjang()
}

printKeranjang = () => {
    let tbElementCart = ""
    totalPayment = 0
    dbKeranjang.forEach((item, index) => {
        tbElementCart += `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${item.foto}" width="120px"/></td>
            <td>${item.namaProduk}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
            <td>${item.priceTotal}</td>
            <td><button type="button" onclick="btEditQty(${index})"> Edit Qty</button>
            <button type="button" onclick="btHapusKeranjang(${index})"> Hapus</button></td>
        </tr>
        `
        totalPayment += item.priceTotal
    })

    document.getElementById("payment").innerHTML = `Payment : Rp. ${totalPayment.toLocaleString()}`
    document.getElementById("listKeranjang").innerHTML = tbElementCart
}

btHapusKeranjang = (i) => {
    //Mengambil index produk berdasarkan findIndex dari perbandingan uniqueKEY id produk 2 database
    let ind = dbProduk.findIndex((item) => item.idProduk == dbKeranjang[i].id)
    // console.log(ind)

    dbProduk[ind].stock += dbKeranjang[i].qty
    dbKeranjang.splice(i, 1)
    printProduk()
    printKeranjang()
}

btEditQty = (idx) => {
    //Mengambil index product
    let ind = dbProduk.findIndex((item) => item.idProduk == dbKeranjang[idx].id)
    //mengembalikan stock produk
    dbProduk[ind].stock += dbKeranjang[idx].qty
    // menginputkan qty yang baru
    let editQty = parseInt(prompt("Masukkan Qty Baru : ", dbKeranjang[idx].qty))
    //menyimpan qty keranjang yang baru
    dbKeranjang[idx].qty = editQty
    //merubah total harga
    dbKeranjang[idx].priceTotal = dbKeranjang[idx].price * editQty
    //mengurangi bagian stock produk
    dbProduk[ind].stock -= editQty
    printProduk()
    printKeranjang()
}

btPayment = () => {
    while (true) {
        let bayar = parseInt(prompt("Masukkan Uang Anda 💸💸💸: ")) - totalPayment
        if (bayar < 0) {
            alert("Uang pembayaran anda kurang ")
        } else {
            alert("Terima kasih sudah berbelanja ☺\n Kembalian anda : Rp. " + bayar.toLocaleString())
            dbKeranjang = []
            totalPayment = 0
            printKeranjang()
            break;
        }
    }
}