//Menyimpan data user
let dbUser = [
    {
        username: "Admin",
        email: "admin@mail.com",
        password: "admin",
        role: "admin"
    },
    {
        username: "Aldo",
        email: "aldo@mail.com",
        password: "aldo",
        role: "user"
    }
]

//Menyimpan data produk
let dbProduk = [
    {
        namaProduk: "Good Time",
        foto: "http://arnotts.co.id/images/image-goodtime/good_time_1550214863.png",
        deskripsi: "Biskuit nikmat diwaktu yang tepat",
        stock: 20,
        harga: 6500
    },
    {
        namaProduk: "Oreo",
        foto: "https://static.republika.co.id/uploads/images/inpicture_slide/oreo-supreme-tidak-dijual-secara-resmi-di_200514190509-631.png",
        deskripsi: "Oreo bikin jadi SULTAN",
        stock: 15,
        harga: 30000
    }
]

//Menyembunyikan tampilan menu
document.getElementById("regis-page").style.display = "none"
document.getElementById("login-page").style.display = "none"

//penampung index user yg login
let userLogin = null

//Blue print object data user
class DB_User {
    constructor(_username, _email, _password) {
        this.username = _username;
        this.email = _email;
        this.password = _password;
        this.role = "user";
    }
}

class DB_Produk {
    constructor(_namaProduk, _foto, _deskripsi, _stock, _harga) {
        this.namaProduk = _namaProduk;
        this.foto = _foto;
        this.deskripsi = _deskripsi;
        this.stock = _stock;
        this.harga = _harga;
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
            }
        })
        if (userLogin != null) {
            if (dbUser[userLogin].role == "admin") {
                alert("Kamu Admin")
            } else if (dbUser[userLogin].role == "user") {
                alert("Kamu User")
            }
        } else {
            alert("Maaf Akun Anda Belum Terdaftar 🙅‍♂️")
        }
    } else {
        alert("Tolong isi semua form yang ada")
    }
}

//////////////////////////REQUIREMENT PRODUK////////////////////////////////
btTambahProduk = () => {
    let formProduk = document.getElementById("formProduk")
    if (formProduk.elements[0].value == '' || formProduk.elements[1].value == '' || formProduk.elements[2].value == '' || formProduk.elements[3].value == '' || formProduk.elements[4].value == '') {
        alert("Isi semua form")
    } else {
        dbProduk.push(new DB_Produk(formProduk[0].value, formProduk[1].value, formProduk[2].value, parseInt(formProduk[3].value), parseInt(formProduk[4].value)))
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
                <td><button type="button" onclick="btEditProduk(${index})">Edit 🔧</button><button type="button" >Hapus 🗑</button></td>
            </tr>`
        }
    })

    document.getElementById("listProduk").innerHTML = tableElement
}

printProduk()

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
    // console.log(pencarian)
    printProduk(null, pencarian)
}