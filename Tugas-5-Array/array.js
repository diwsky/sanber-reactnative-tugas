var isValid = (a) => typeof (a) !== 'undefined'

console.log("=== Nomor 1 ===")
const range = (a, b) => {
    let valid = isValid(a) && isValid(b)
    var ret = []
    if (a > b) {
        for (let i = a; i >= b; i--) {
            ret.push(i)
        }
    } else {
        for (let i = a; i <= b; i++) {
            ret.push(i)
        }
    }
    return valid ? ret : -1
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log("=== Nomor 2 ===")
const rangeWithStep = (a, b, c) => {
    let valid = isValid(a) && isValid(b) && isValid(c)
    var ret = []
    if (a > b) {
        for (let i = a; i >= b; i -= c) {
            ret.push(i)
        }
    } else {
        for (let i = a; i <= b; i += c) {
            ret.push(i)
        }
    }
    return valid ? ret : -1
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log(`=== Nomor 3 ===`)
const sum = (a, b, c = 1) => !isValid(a) && !isValid(b) ? 0 : isValid(a) && !isValid(b) ? 1 : rangeWithStep(a, b, c).reduce((acc, curr) => acc += curr)
console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log(`=== Nomor 4 ===`)
const dataHandling = (n) => {
    return n.forEach(element => {
        console.log(`Nomor ID: ${element[0]}\n Nama Lengkap: ${element[1]}\n TTL: ${element[2]}\n Hobi: ${element[3]}\n`)
    })

}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
dataHandling(input)

console.log(`=== Nomor 5 ===`)
const balikKata = (kata) => {
    let temp = kata.split('')
    let ret = []
    for (let i = temp.length; i > 0; i--) {
        ret[i] = temp[temp.length - i]
    }
    return ret.join('')
}
const balikKata2 = (kata) => kata.split("").reverse().join("")

console.log(balikKata2("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata2("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata2("I am Sanbers")) // srebnaS ma I 

console.log(`=== Nomor 6 ===`)
const dataHandling2 = (input) => {

    // subtask 1
    input.splice(1, 1, input[1] + ` Elsharawy`)
    input.splice(2, 1, `Provinsi ${input[2]}`)
    input.splice(4, 1, `Pria`)
    input.splice(5, 0, `SMA Internasional Metro`)
    console.log(input)

    // subtask 2
    let arrTanggal = input[3].split('/')
    console.log(formatBulan(arrTanggal[1]))

    // subtask 3
    arrTanggal.sort((a, b) => b - a)
    console.log(arrTanggal)

    // subtask 4
    console.log(formatDate(input[3]))

    // subtask 5
    console.log(input[1].slice(0, 15))

}
const formatDate = (date) => date.split('/').join('-')
const formatBulan = (bulan) => {
    let ret = ``
    switch (parseInt(bulan)) {
        case 1: ret = `Januari`; break;
        case 2: ret = `Februari`; break;
        case 3: ret = `Maret`; break;
        case 4: ret = `April`; break;
        case 5: ret = `Mei`; break;
        case 6: ret = `Juni`; break;
        case 7: ret = `Juli`; break;
        case 8: ret = `Agustus`; break;
        case 9: ret = `September`; break;
        case 10: ret = `Oktober`; break;
        case 11: ret = `November`; break;
        case 12: ret = `Desember`; break;
        default: ret = `Invalid!`; break;
    }
    return ret
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])