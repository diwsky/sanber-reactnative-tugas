// Nomor 1
// Release 0
class Animal {
  constructor(name) {
    this.name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get legs() {
    return this._legs;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

// Release 1
class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2;
  }
  yell() {
    return console.log("Auooooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    return console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti", false);
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

// Nomor 2

class Clock {
  constructor({ template }) {
    this._template = template;
    this._timer = 0;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    this._template = `${hours}:${mins}:${secs}`;
    console.log(this._template);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();
    this._timer = setInterval(() => {
      this.render();
    }, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
