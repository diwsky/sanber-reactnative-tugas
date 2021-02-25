let readBooks = require('./callback.js')

let books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

let indexBuku = 0;
// Fungsi untuk memanggil fungsi readBooks supaya bisa rekursif
const iqro = (waktu, bukuSekarang) => {
    // Panggil fungsi readBooks dari callback.js
    readBooks(waktu, bukuSekarang, (waktuSisa) => {
        // Setelah dapat hasil dari callback, naikkan index untuk pilih buku selanjutnya
        indexBuku = indexBuku + 1;
        // Cek, apabila buku berikutnya masih ada, panggil fungsi sendiri (rekursif),
        // gunakan parameter waktu tersisa dari callback
        if (indexBuku < books.length) {
            iqro(waktuSisa, books[indexBuku])
        } else {
            // end
            console.log(`Semua buku telah dilihat/dibaca!`)
        }
    })
}

iqro(5000, books[indexBuku])