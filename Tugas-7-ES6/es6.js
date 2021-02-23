// nomor 1
const golden = () => console.log("this is golden!!")

// nomor 2
const newFunction = (firstName,fullName) => {
    return {firstName,fullName,a = ()=>console.log(firstName+" "+fullName)}
}

// nomor 3
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation} = newObject

// nomor 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

// nomor 5
const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet,  
    consectetur adipiscing elit, ${planet}  do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam`