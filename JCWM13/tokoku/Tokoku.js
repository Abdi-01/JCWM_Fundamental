//Database
let dbProduct = [
    {
        image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-5219175/chocolatos_chocolatos_long_wafer_roll_-_hazelnut_-_1_kotak_isi_20_pcs_full02_ex5jhqbe.jpg',
        name: "Chocolatos",
        category: 'Snack',
        price: 3000,
        stock: 50
    },
    {
        image: 'https://cdn.monotaro.id/media/catalog/product/cache/6/image/b5fa40980320eb406ba395dece54e4a8/S/0/S000003866-4.jpg',
        name: "Beng-Beng",
        category: 'Snack',
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

let dbUserCart = []
let dbUserReceipt = []

var htmlElement = '', loginSuccess, acount, totalAmount = 0

document.getElementById('product-page').style.display = "none"
document.getElementById('cart-page').style.display = "none"
document.getElementById('receipt').style.display = "none"

class newProduct {
    constructor(_image, _name, _category, _price, _stock) {
        this.image = _image;
        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.stock = _stock;
    }
}

class newCart {
    constructor(_username, _image, _name, _category, _price, _qty) {
        this.username = _username;
        this.image = _image;
        this.name = _name;
        this.category = _category;
        this.price = _price;
        this.qty = _qty;
    }
}

function login() {
    let user = document.getElementById("username").value
    console.log('in', user)
    let pass = document.getElementById("password").value
    loginSuccess = dbUser.filter((item, index) => item.username === user && item.password === pass)
    document.getElementById("username").value = ''
    document.getElementById("password").value = ''

    if (loginSuccess.length === 1) {
        if (loginSuccess[0].role === 'admin') {
            alert(`Selamat datang ${loginSuccess[0].username} 🕵️‍♀️`)
            document.getElementById('login-page').style.display = "none"
            document.getElementById('product-page').style.display = "block"
            printProductAdmin()
            printAddProduct()
        } else if (loginSuccess[0].role === 'user') {
            alert(`Halo ${loginSuccess[0].username}, mau belanja apa hari ini 😁`)
            document.getElementById('login-page').style.display = "none"
            document.getElementById('product-page').style.display = "block"
            document.getElementById('cart-page').style.display = "block"
            document.getElementById('receipt').style.display = "block"
            printProductUser()
            printCartUser()
        }
    }
}

function logout() {
    loginSuccess = ''
    document.getElementById('login-page').style.display = "flex"
    document.getElementById('product-page').style.display = "none"
    document.getElementById('cart-page').style.display = "none"
}

function addProduct() {
    var name = document.getElementById('name').value
    var image = document.getElementById('image').value
    var category = document.getElementById('category').value
    var price = document.getElementById('price').value
    var stock = document.getElementById('stock').value
    // var e = document.getElementById('category')
    // var category = e.options[e.selectedIndex].value

    dbProduct.push(new newProduct(image, name, category, price, stock))
    console.log(dbProduct)
    console.log(htmlElement)
    printProductAdmin()
}

function remove(index) {
    dbProduct.splice(index, 1)
    printProductAdmin()
}

function edit(index) {
    dbProduct[index].image = prompt('Edit Image', dbProduct[index].image)
    dbProduct[index].name = prompt('Edit Name', dbProduct[index].name)
    dbProduct[index].category = prompt('Edit Category', dbProduct[index].category)
    dbProduct[index].price = parseInt(prompt('Edit Price', dbProduct[index].price))
    dbProduct[index].stock = parseInt(prompt('Edit Stock', dbProduct[index].stock))
    printProductAdmin()
}

function printProductAdmin() {
    htmlElement = ''
    dbProduct.forEach((item, index) => {
        htmlElement += `
            <tr>
            <td>${index + 1}</td>
            <td><img src="${item.image}" width="90px"/> </td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.stock}</td>
            <td>IDR. ${parseInt(item.price).toLocaleString()}</td>
            <td><input type="button" value="Edit" onclick="edit(${index})" /><input type="button" value="Hapus" onclick="remove(${index})" /></td>
            </tr>`
    })
    document.getElementById('tbKegiatan').innerHTML = htmlElement
    // printAddProduct()
}

function printProductUser() {
    htmlElement = ''
    dbProduct.forEach((item, index) => {
        htmlElement += `
            <tr>
            <td>${index + 1}</td>
            <td><img src="${item.image}" width="90px"/> </td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.stock}</td>
            <td>IDR. ${item.price.toLocaleString()}</td>
            <td><input type="button" value="Add to cart 🛒" onclick="addToCart(${index})" /></td>
            </tr>`
    })
    document.getElementById('tbKegiatan').innerHTML = htmlElement
    document.getElementById('addForm').innerHTML = '<h3>Selamat Berbelanja'
}

function printAddProduct() {
    let addProductElement = ` <label>Add Your New Product</label>
    <form >
    <label>Name</label>
    <input type="text" id="name" />
    <label>Image</label>
    <input type="text" id="image" />
    <label>Category</label>
    <select id="category">
    <option value="Snack">Snack</option>
    <option value="Drink">Drink</option>
    <option value="Tools">Tools</option>
    </select>
    <label>Stock</label>
    <input type="number" id="stock" />
    <label>Price</label>
    <input type="number" id="price" />
    <input type="button" value="Add Product" onclick="addProduct()" />
    </form>`

    document.getElementById('addForm').innerHTML = addProductElement

}

//Transaction User
function addToCart(index) {
    // console.log(dbUserCart.filter((item) => item.name == dbProduct[index].name && item.username == loginSuccess[0].username))
    if (dbUserCart.length == 0 || dbUserCart.filter((item) => item.name == dbProduct[index].name && item.username == loginSuccess[0].username).length == 0) {
        dbUserCart.push(new newCart(loginSuccess[0].username, dbProduct[index].image, dbProduct[index].name, dbProduct[index].category, dbProduct[index].price, 1))
    } else {
        for (let i = 0; i < dbUserCart.length; i++) {
            if (dbUserCart[i].name == dbProduct[index].name && dbUserCart[i].username == loginSuccess[0].username) {
                dbUserCart[i].qty++
            }
        }
    }

    printCartUser()

}

function delete_cart(index) {
    if (dbUserCart[index].qty > 1) {
        dbUserCart[index].qty -= 1
    } else {
        dbUserCart.splice(index, 1)
    }
    printCartUser()
}

function checkout() {
    dbUserCart.forEach((item, index) => {
        if (item.username == loginSuccess[0].username) {
            dbUserReceipt.push(item)
        }
    })
    console.log(dbUserReceipt)
    // printCartUser()
    // console.log(dbUserCart)
    // if (payment > 0 && typeof (payment) == Number) {
    printReceiptUser()
    // }
}

//Cart user
function printCartUser() {
    console.log(loginSuccess[0].username)
    let count = 1
    htmlElement = ''
    totalAmount = 0
    dbUserCart.forEach((item, index) => {
        if (item.username == loginSuccess[0].username) {
            htmlElement += `
                <tr>
                <td>${count++}</td>
                <td><img src="${item.image}" width="90px"/> </td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <th>${item.qty}</th>
                <th>IDR. ${item.price.toLocaleString()}</th>
                <th>IDR. ${(item.price * item.qty).toLocaleString()}</th>
                <th><input type="button" value="Remove" onclick="delete_cart(${index})" /></th>
                </tr>`
            totalAmount += item.price * item.qty
        }
    })
    document.getElementById('tbCart').innerHTML = htmlElement
    document.getElementById('cartAmount').innerHTML = `IDR. ${totalAmount.toLocaleString()}`
}

function printReceiptUser() {
    var payment = parseInt(prompt("Masukkan Uang Anda :"))
    htmlElement = ''
    totalAmount = 0
    dbUserReceipt.forEach((item, index) => {
        if (item.username == loginSuccess[0].username) {
            htmlElement += `
                <tr>
                <td>${item.name}</td>
                <th>${item.qty}</th>
                <th>IDR. ${item.price.toLocaleString()}</th>
                <th>IDR. ${(item.price * item.qty).toLocaleString()}</th>
                </tr>`
            totalAmount += item.price * item.qty
        }
    })

    document.getElementById('tbRec').innerHTML = htmlElement
    document.getElementById('tbReceipt').innerHTML = `
    <tr>
        <th colspan="3">Your Payment</th>
        <th>IDR. ${payment.toLocaleString()}</th>
    </tr>
    <tr>
        <th colspan="3">Total Cart</th>
        <th>IDR. ${totalAmount.toLocaleString()}</th>
    </tr>
    <tr>
        <th colspan="3">Change Money</th>
        <th>IDR. ${(payment - totalAmount).toLocaleString()}</th>
    </tr>
    `
}