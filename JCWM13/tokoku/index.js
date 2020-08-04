let dbProduct = [
    {
        image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-5219175/chocolatos_chocolatos_long_wafer_roll_-_hazelnut_-_1_kotak_isi_20_pcs_full02_ex5jhqbe.jpg',
        name: "Chocolatos",
        price: 3000,
        stock: 50
    },
    {
        image: 'https://cdn.monotaro.id/media/catalog/product/cache/6/image/b5fa40980320eb406ba395dece54e4a8/S/0/S000003866-4.jpg',
        name: "Beng-Beng",
        price: 3500,
        stock: 50
    }
]

let dbUser = [
    {
        username: "Admin",
        password: '123',
        role: 'admin'
    },
    {
        username: "Budi",
        password: '321',
        role: 'user'
    },
    {
        username: "Andi",
        password: '456',
        role: 'user'
    }
]

class newProduct {
    constructor(_image, _name, _price, _stock) {
        this.image = _image;
        this.name = _name;
        this.price = _price;
        this.stock = _stock;
    }
}

class newUser {
    constructor(_username, _password) {
        this.username = _username;
        this.password = _password;
        this.role = 'user';
    }
}

function login() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    let loginSuccess = dbUser.filter((item, index) => item.username === user && item.password === pass)
    document.getElementById("username").value = ''
    document.getElementById("password").value = ''

    if (loginSuccess.length === 1) {
        if (loginSuccess[0].role === 'admin') {
            alert(`Selamat datang ${loginSuccess[0].username} 🕵️‍♀️`)
        } else {
            alert(`Halo ${loginSuccess[0].username}, mau belanja apa hari ini 😁`)
            setInterval(()=>console.log('test'),1000)
            window.location.href = 'product.html'
        }
    }
}

function register() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    if (user.length > 0) {
        console.log(user)
    }
}