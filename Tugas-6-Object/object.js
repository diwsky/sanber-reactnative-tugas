/**
 * Soal Nomor 1
 */

console.log(`=== Nomor 1 ===`);
const arrayToObject = (input) => {
  let i = 1;
  for (const eachArr of input) {
    let ret = {
      firstName: eachArr[0],
      lastName: eachArr[1],
      gender: eachArr[2],
      age: getAge(eachArr[3]),
    };
    console.log(`${i}. ${ret.firstName} ${ret.lastName}:`, ret);
    i++;
  }
};

const getAge = (year) => {
  let today = new Date().getFullYear();
  return today > year ? today - year : `Invalid birth year!`;
};

arrayToObject([
  ["Abduh", "Muhamad", "male", 1992],
  ["Ahmad", "Taufik", "male", 1985],
]);

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/

// Error case
arrayToObject([]); // ""

/**
 * Soal Nomor 2
 */
console.log(`=== Nomor 2 ===`);
const shoppingTime = (memberId, money) => {
  // declare object
  const sepatuStacattu = {
    nama: `Sepatu Stacattu`,
    harga: 1500000,
  };
  const bajuZoro = {
    nama: `Baju Zoro`,
    harga: 500000,
  };
  const bajuHnN = {
    nama: `Baju H&N`,
    harga: 250000,
  };
  const sweaterUniklooh = {
    nama: `Sweater Uniklooh`,
    harga: 175000,
  };
  const casingHp = {
    nama: `Casing Handphone`,
    harga: 50000,
  };
  const sale = [sepatuStacattu, bajuZoro, bajuHnN, sweaterUniklooh, casingHp];

  if (typeof memberId === "undefined" || memberId == "") {
    return `Mohon maaf, toko X hanya berlaku untuk member saja`;
  } else if (money < 50000) {
    return `Mohon maaf, uang tidak cukup`;
  } else {
    let summary = {
      memberId: memberId,
      money: money,
    };
    let listPurchased = [];
    let changeMoney = 0;
    for (const eachItem of sale) {
      if (money >= eachItem.harga) {
        listPurchased.push(eachItem.nama);
        money -= eachItem.harga;
      }
      if (money < 50000 || eachItem === casingHp) {
        changeMoney = money;
      }
    }
    summary.listPurchased = listPurchased;
    summary.changeMoney = changeMoney;
    return summary;
  }
};

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

/**
 * Soal nomor 3
 */
const naikAngkot = (listPenumpang) => {
  let rute = ["A", "B", "C", "D", "E", "F"];
  let ret = [];
  for (const eachPenumpang of listPenumpang) {
    let detilPenumpang = {};
    detilPenumpang.penumpang = eachPenumpang[0];
    detilPenumpang.naikDari = eachPenumpang[1];
    detilPenumpang.tujuan = eachPenumpang[2];
    detilPenumpang.harga =
      (rute.indexOf(eachPenumpang[2]) - rute.indexOf(eachPenumpang[1])) * 2000;
    ret.push(detilPenumpang);
  }
  return ret;
};

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
