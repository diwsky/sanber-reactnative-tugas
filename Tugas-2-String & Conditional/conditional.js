// if-else
var nama = "Diwang"
var peran = "Werewolf"

const werewolfGame = (nama, peran) => {
    let ret = ''
    if (nama === '') {
        ret = `Nama harus diisi!`
    } else {
        if (peran === ``) {
            ret = `Halo, ${nama}. Pilih peranmu untuk memulai game!`
        } else {
            let peranText = ''
            if (peran === 'Guard') {
                peranText = `akan membantu melindungi temanmu dari serangan werewolf!`
            } else if (peran === 'Wizard') {
                peranText = `dapat melihat siapa yang menjadi werewolf!`
            } else if (peran === 'Werewolf') {
                peranText = `akan memakan mangsa setiap malam!`
            } else {
                peranText = `salah memilih peran sebagai ${peran}!`
            }
            ret = `Halo ${peran} ${nama}, kamu ${peranText}`
        }
    }
    return ret;
}
console.log(werewolfGame(nama, peran))

// switch case
var tanggal = "17"
var bulan = "08"
var tahun = "2201"

const formatTanggal = (tanggal) => {
    let ret = ``
    switch (true) {
        case ((tanggal >= 1) && (tanggal <= 31)): ret = Number(tanggal); break;
        default: ret = `Invalid!`
    }
    return ret;
}

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

const formatTahun = (tahun) => {
    let ret = ``
    switch (true) {
        case ((Number(tahun) >= 1900) && (Number(tahun) <= 2200)): ret = Number(tahun); break;
        default: ret = `Invalid!`
    }
    return ret
}

console.log(`${formatTanggal(tanggal)} ${formatBulan(bulan)} ${formatTahun(tahun)}`)