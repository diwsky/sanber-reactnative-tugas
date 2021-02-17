console.log(`========= Nomor 1 =========`)
var loopText1 = `I love coding`
var loopText2 = `I will become a mobile developer`
var flag = false;
let counter = 2;

while (counter >= 2) {
    let text = ``
    counter === 2 && !flag ? console.log(`LOOPING PERTAMA`) : counter > 20 ? console.log(`LOOPING KEDUA`) : null
    if (flag) {
        // loop 2
        counter -= 2;
        text = `${counter} - ${loopText2}`
    } else {
        // loop 1
        text = `${counter} - ${loopText1}`
        counter += 2;
        flag = counter > 20 ? true : false
    }
    counter > 0 && console.log(text)
}

console.log(`========= Nomor 2 =========`)
for (let i = 1; i <= 20; i++) {
    let ret = i + ` - `;
    if (i % 2 === 0) {
        // genap
        ret += `Berkualitas`
    } else {
        if (i % 3 === 0) {
            ret += `I Love Coding`
        } else {
            ret += `Santai`
        }
    }
    console.log(ret)
}

console.log(`========= Nomor 3 =========`)
let row = 0
while (row < 4) {
    let tag = ``
    for (let i = 0; i < 8; i++) {
        tag += `#`
    }
    console.log(tag)
    row++
}

console.log(`========= Nomor 4 =========`)
row = 1
while (row < 8) {
    let tag = ``
    for (let i = 0; i < row; i++) {
        tag += `#`
    }
    console.log(tag)
    row++
}

console.log(`========= Nomor 5 =========`)
let rows = 0
let cols = 0
for (let i = rows; i < 8; i++) {
    let tag = ``
    for (let j = cols; j < 8; j++) {
        if (i % 2 == 0) {
            j % 2 == 0 ? tag += ` ` : tag += `#`
        } else {
            j % 2 == 0 ? tag += `#` : tag += ` `
        }
    }
    console.log(tag)
}