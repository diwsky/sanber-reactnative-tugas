let readBooks = require('./callback.js')

let books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

let idx = 0;
const iqro = (waktu, bukuSekarang) => {
    readBooks(waktu, bukuSekarang, (time) => {
        idx++
        idx < books.length ? iqro(time, books[idx]) : console.log(`Semua buku telah dilihat/dibaca!`)
    })
}

iqro(5000, books[idx])