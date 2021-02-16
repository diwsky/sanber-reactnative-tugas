// Soal no. 1 (Membuat kalimat)
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

let result = word.concat(second + ` `).concat(third + ` `).concat(fourth + ` `).concat(fifth + ` `).concat(sixth + ` `).concat(seventh + ` `);
console.log(result)

// Soal no. 2 Mengurai kalimat (Akses karakter dalam string)
var sentence = "I am going to be React Native Developer";

let arrSentence = sentence.split(" ")
var firstWord = arrSentence[0]
var secondWord = arrSentence[1]
var thirdWord = arrSentence[2]
var fourthWord = arrSentence[3]
var fifthWord = arrSentence[4]
var sixthWord = arrSentence[5]
var seventhWord = arrSentence[6]
var eighthWord = arrSentence[7]

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('Sixth Word: ' + sixthWord);
console.log('Seventh Word: ' + seventhWord);
console.log('Eighth Word: ' + eighthWord)

// Soal no. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool';

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17)
var fourthWord2 = sentence2.substring(18, 20)
var fifthWord2 = sentence2.substring(21, 25)

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);

// Soal no. 4