console.log(`=== Nomor 1 ===`)
const teriak = () => `Halo Sanbers!`
console.log(teriak())

console.log(`=== Nomor 2 ===`)
const kalikan = (a, b) => a * b
var num1 = 12
var num2 = 4
var hasilKali = kalikan(12, 4)
console.log(hasilKali)

console.log(`=== Nomor 3 ===`)
const introduce = (name, ages, address, hobby) => `Nama Saya ${name}, umur saya ${ages} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}]!`
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)