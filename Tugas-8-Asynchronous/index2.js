let readBookPromise = require(`./promise.js`);

let books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

idx = 0;

let iqroFunction = (sisa, bukuSekarang) => {
  readBookPromise(sisa, bukuSekarang)
    .then((sisaTime) => {
      idx++;
      idx < books.length ? iqroFunction(sisaTime, books[idx]) : null;
    })
    .catch((error) => {
      console.log(error + `boiiiii`);
    })
    .then(() => console.log("test compile"));
};

iqroFunction(11100, books[idx]);
