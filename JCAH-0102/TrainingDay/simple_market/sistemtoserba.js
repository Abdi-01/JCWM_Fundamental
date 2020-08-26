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
        if(cek.length == 0){
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
        }else{
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