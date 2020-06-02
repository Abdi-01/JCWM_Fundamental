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

let dbUserCart = [], dbUserReceipt = [], dbTemp = []

var htmlElement = '', loginSuccess, totalAmount = 0

document.getElementById('product-page').style.display = "none"
document.getElementById('cart-page').style.display = "none"
document.getElementById('receipt').style.display = "none"
document.getElementById("regis-page").style.display = "none"

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

function regisForm(param) {
    if (param == "toform") {
        document.getElementById("login-page").style.display = "none"
        document.getElementById("regis-page").style.display = "flex"
        console.log("Cek")
    } else {
        document.getElementById("login-page").style.display = "flex"
        document.getElementById("regis-page").style.display = "none"
    }
}

function regis() {
    let user = document.getElementById("newusername").value
    let pass = document.getElementById("newpassword").value

    let conf = confirm("Yakin mendaftar akun ?")
    if (conf) dbUser.push({ username: user, password: pass, role: 'user' })
}

function login() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    loginSuccess = dbUser.filter((item, index) => item.username === user && item.password === pass)
    document.getElementById("username").value = ''
    document.getElementById("password").value = ''

    if (loginSuccess.length === 1) {
        if (loginSuccess[0].role === 'admin') {
            alert(`Selamat datang ${loginSuccess[0].username} 🕵️‍♀️`)
            document.getElementById('login-page').style.display = "none"
            document.getElementById('product-page').style.display = "block"
            printProduct()
            printAddProduct()
        } else if (loginSuccess[0].role === 'user') {
            alert(`Halo ${loginSuccess[0].username}, mau belanja apa hari ini 😁`)
            document.getElementById('login-page').style.display = "none"
            document.getElementById('product-page').style.display = "block"
            document.getElementById('cart-page').style.display = "block"
            document.getElementById('receipt').style.display = "block"
            printProduct()
            printCartUser()
        } else {
            alert()
        }
    }
}

function logout() {
    loginSuccess = ''
    document.getElementById('login-page').style.display = "flex"
    document.getElementById('product-page').style.display = "none"
    document.getElementById('cart-page').style.display = "none"
    document.getElementById('tbRec').innerHTML = ''
    document.getElementById('tbReceipt').innerHTML = ''
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
    printProduct()
}

function remove(index) {
    dbProduct.splice(index, 1)
    printProduct()
}

function edit(index) {
    document.getElementById(`image-${index}`).innerHTML = `<input type="text" id="newImage" value="${dbProduct[index].image}"/>`
    document.getElementById(`name-${index}`).innerHTML = `<input type="text" id="newName" value="${dbProduct[index].name}"/>`
    document.getElementById(`category-${index}`).innerHTML = ` <select id="newCategory">
    <option value="Snack" ${"Snack" == dbProduct[index].category ? "selected" : null}>Snack</option>
    <option value="Drink" ${"Drink" == dbProduct[index].category ? "selected" : null}>Drink</option>
    <option value="Tools" ${"Tools" == dbProduct[index].category ? "selected" : null}>Tools</option>
    </select>`
    document.getElementById(`stock-${index}`).innerHTML = `<input type="number" id="newStock" value="${dbProduct[index].stock}"/>`
    document.getElementById(`price-${index}`).innerHTML = `<input type="number" id="newPrice" value="${dbProduct[index].price}"/>`
    document.getElementById(`action-${index}`).innerHTML = `<input type="button" value="Simpan 💾" onclick="save(${index})" /><input type="button" value="Batal 🚧" onclick="cancel()" />`
    // printProductAdmin()
}

function save(index) {
    var new_name = document.getElementById('newName').value
    var new_image = document.getElementById('newImage').value
    var new_category = document.getElementById('newCategory').value
    var new_price = document.getElementById('newPrice').value
    var new_stock = document.getElementById('newStock').value
    console.log(new_price, new_stock)
    dbProduct[index].name = new_name
    dbProduct[index].image = new_image
    dbProduct[index].category = new_category
    dbProduct[index].price = new_price
    dbProduct[index].stock = new_stock
    printProduct()
}

function printProduct(product = dbProduct) {
    htmlElement = ''
    product.forEach((item, index) => {
        htmlElement += `
        <tr>
        <td>${index + 1}</td>
        <td id="image-${index}"><img src="${item.image}" width="90px"/> </td>
        <td id="name-${index}">${item.name}</td>
        <td id="category-${index}">${item.category}</td>
        <td id="stock-${index}">${item.stock}</td>
        <td id="price-${index}">IDR. ${parseInt(item.price).toLocaleString()}</td>
                <td id="action-${index}">${
            loginSuccess[0].role == "admin"
                ? `<input type="button" value="Edit" onclick="edit(${index})" /><input type="button" value="Hapus" onclick="remove(${index})" />`
                :
                `<input type="button" value="Add to cart 🛒" onclick="addToCart(${index})" />`}</td>
            </tr>`
    })
    document.getElementById('tbProduct').innerHTML = htmlElement
    // document.getElementById('addForm').innerHTML = loginSuccess[0].role == "user" ? `<h3>Selamat Berbelanja ${loginSuccess[0].username}</h3>` : printAddProduct()
    printAddProduct()
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
    <option selected>Choose Category</option>
    <option value="Snack">Snack</option>
    <option value="Drink">Drink</option>
    <option value="Tools">Tools</option>
    </select>
    <label>Stock</label>
    <input type="number" id="stock" />
    <label>Price</label>
    <input type="number" id="price" />
    <input type="button" value="Add Product" onclick="addProduct()" />
    </form>
    <input type="button" value="Get Report" onclick="getReport()" />
    `

    document.getElementById('addForm').innerHTML = loginSuccess[0].role == "user" ? `<h3>Selamat Berbelanja ${loginSuccess[0].username}</h3>` : addProductElement

}
//Filter
function filterPro() {
    let fil = document.getElementById("filter").value
    console.log(fil)
    dbTemp = dbProduct.filter((item) => item.name.toLowerCase() == fil.toLowerCase())
    printProduct(dbTemp)
}

function filterClear() {
    document.getElementById("filter").value = null
    dbTemp = []
    printProduct()
}

//Transaction User
function addToCart(index) {
    var productList = dbTemp.length > 0 ? dbTemp : dbProduct
    if (dbUserCart.length == 0 || dbUserCart.filter((item) => item.name == productList[index].name && item.username == loginSuccess[0].username).length == 0) {
        dbUserCart.push(new newCart(loginSuccess[0].username, productList[index].image, productList[index].name, productList[index].category, productList[index].price, 1))
    } else {
        for (let i = 0; i < dbUserCart.length; i++) {
            if (dbUserCart[i].name == productList[index].name && dbUserCart[i].username == loginSuccess[0].username) {
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
    let inChart = []
    dbUserCart.forEach((item, index) => {
        if (item.username == loginSuccess[0].username) {
            dbUserReceipt.push(item)
            inChart.push(index)
        }
    })

    inChart.sort((a, b) => { return b - a }).forEach((item) => {
        console.log(item)
        dbUserCart.splice(item, 1)
    })
    console.log(dbUserReceipt)
    printReceiptUser()
}

//Cart user
function printCartUser() {
    console.log(loginSuccess[0].username)
    let count = 1 // to make a coloumn number, because the index in dbUserCart by username not always ordered
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
//Receipt show after customer input his money
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
    printCartUser()
}

function getReport() {
    var report = []

    dbUserReceipt.forEach((item, index) => {
        if (report.length == 0 || report.filter((itemR) => itemR[0] == item.name).length == 0) {
            report.push([item.name, item.qty])
        } else {
            report.forEach((itemReport) => {
                if (itemReport[0] == item.name) {
                    itemReport[1] += item.qty
                }
            })
        }
    })
}