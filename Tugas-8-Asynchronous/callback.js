// Baca buku
const readBooks = (time, book, callback) => {
    console.log(`Saya membaca buku ${book.name}`)
    setTimeout(() => {
        let sisaWaktu = 0
        // console.log(`time ${time}, book ${book.name}, timeSpent ${book.timeSpent}`)
        if (time > book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log(`Saya sudah membaca buku ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu)
        } else {
            console.log(`Waktu saya habis!`)
            callback(time)
        }
    }, book.timeSpent)
}

module.exports = readBooks
// export default readBooks