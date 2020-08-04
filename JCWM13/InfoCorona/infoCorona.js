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
], dbrapid = [], dbpositif = [], dbnegatif = [], dbmeninggal = [], htmlElement = '', countWarga = dbwarga.length

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
    printRapid()
    printPositif()
}
function toNegatif(index) {
    dbnegatif.push(dbrapid[index])
    dbrapid.splice(index, 1)
    printRapid()
    printNegatif()
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
}