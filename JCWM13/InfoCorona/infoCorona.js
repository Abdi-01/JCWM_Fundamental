let dbwarga = [
    {
        antrian: "A112",
        nama: "Dimas",
        dari: "Jakarta",
        tujuan: "Surabaya"
    },
    {
        antrian: "B115",
        nama: "Bimo",
        dari: "Jakarta",
        tujuan: "Bandung"
    },
    {
        antrian: "C113",
        nama: "Aldo",
        dari: "Semarang",
        tujuan: "Jakarta"
    }
], dbrapid = [], dbpositif = [], dbnegatif = [], dbmeninggal = [], htmlElement = '', countWarga = dbwarga.length, stockRapid = 20, ambilAlat = 0

printWarga()
function addWarga() {
    let karakter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", kode_antri = ''
    for (let i = 1; i <= 4; i++) {
        kode_antri += karakter.charAt(Math.round(Math.random() * karakter.length - 1))
    }
    dbwarga.push({ antrian: kode_antri, nama: document.getElementById("nama").value, dari: document.getElementById("asal").value, tujuan: document.getElementById("tujuan").value })
    countWarga += 1
    printWarga()
}

function rapidTest(index) {
    dbrapid.push(dbwarga[index])
    dbwarga.splice(index, 1)
    printWarga()
    printRapid()
}

function toPositif(index) {
    dbpositif.push(dbrapid[index])
    dbrapid.splice(index, 1)
    ambilAlat -= 1
    printRapid()
    printPositif()
    reportData()
}
function toNegatif(index) {
    dbnegatif.push(dbrapid[index])
    ambilAlat -= 1
    dbrapid.splice(index, 1)
    printRapid()
    printNegatif()
    reportData()
}

function toSembuh(index) {
    dbwarga.push(dbpositif[index])
    dbpositif.splice(index, 1)
    printWarga()
    printPositif()
}

function toWarga(index) {
    dbwarga.push(dbnegatif[index])
    dbnegatif.splice(index, 1)
    printWarga()
    printNegatif()
}

function toMeninggal(index) {
    dbmeninggal.push(dbpositif[index])
    dbpositif.splice(index, 1)
    printPositif()
}

function restockAlat() {
    let reStock = parseInt(prompt("Jumlah alat yang diminta ?"))
    if (reStock > stockRapid) {
        alert('🚧 Stock Gudang Terbatas')
    } else {
        ambilAlat += reStock
        stockRapid -= reStock
    }
    stockRapid <= 1 ? stockRapid += parseInt(prompt('Restock Alat di Gudang : ')) : null
    reportData()
}

function returnAlat() {
    stockRapid += ambilAlat
    ambilAlat = 0
    reportData()
}

function reportData() {
    document.getElementById("jmlh_warga").textContent = countWarga
    document.getElementById("jmlh_rapid").textContent = dbrapid.length
    document.getElementById("alat_rapid").textContent = ambilAlat
    document.getElementById("jmlh_alat_rapid").textContent = stockRapid
    document.getElementById("jmlh_positif").textContent = dbpositif.length
    document.getElementById("jmlh_negatif").textContent = dbnegatif.length
    document.getElementById("jmlh_meninggal").textContent = dbmeninggal.length
}

//print table
function printWarga() {
    htmlElement = ''
    dbwarga.forEach((item, index) => {
        htmlElement += `
        <tr>
                <th>${item.antrian}</th>
                <th>${item.nama}</th>
                <th>${item.dari}</th>
                <th>${item.tujuan}</th>
                <th><input type="button" value="Rapid Test" onclick="rapidTest(${index})"></th>
            </tr>
        `
    })
    document.getElementById("tb_warga").innerHTML = htmlElement
    reportData()
}


function printRapid() {
    htmlElement = ''
    dbrapid.forEach((item, index) => {
        htmlElement += `
        <tr>
        <th>${item.antrian}</th>
        <th>${item.nama}</th>
        <th>${item.dari}</th>
        <th>${item.tujuan}</th>
        <th> <select>
        <option value="positif" onclick="toPositif(${index})">Postif</option>
        <option value="negatif" onclick="toNegatif(${index})">Negatif</option>
        </select>
        </th>
        </tr>
        `
    })
    document.getElementById("tb_rapid").innerHTML = htmlElement
    // reportData()
}

function printPositif() {
    htmlElement = ''
    dbpositif.forEach((item, index) => {
        htmlElement += `
        <tr>
        <th>${item.antrian}</th>
        <th>${item.nama}</th>
        <th>${item.dari}</th>
        <th>${item.tujuan}</th>
        <th> <select>
        <option value="positif" onclick="toSembuh(${index})">Sembuh</option>
        <option value="negatif" onclick="toMeninggal(${index})">Meninggal</option>
        </select>
        </th>
        </tr>
        `
    })
    document.getElementById("tb_positif").innerHTML = htmlElement
    // reportData()
}

function printNegatif() {
    htmlElement = ''
    dbnegatif.forEach((item, index) => {
        htmlElement += `
        <tr>
        <th>${item.antrian}</th>
        <th>${item.nama}</th>
        <th>${item.dari}</th>
        <th>${item.tujuan}</th>
        <th><input type="button" value="To Warga" onclick="toWarga(${index})"></th>
        </tr>
        `
    })
    document.getElementById("tb_negatif").innerHTML = htmlElement
    // reportData()
}