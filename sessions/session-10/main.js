console.log("Session 10 Array Methods Reduce")

//Construir propiedades de forma dinamica.

const person = {
  nombre: "Luis",
  apellido: "Diaz",
  direccion: "direccion random",
}

const property = "direccion"

//Verificar si una propieda existe en el objeto
if (property in person) {
  person[property] = "Mi nueva direccion porque ya existo"
} else {
  person[property] = "Direccion agregada porque no existia"
}

console.log(person)

//Spread Operator on Arrays

const otherNumbers = [3, 56, 78]

const numbers = [1, 2, ...otherNumbers, 345]
const numbersWithoutSpread = [1, 2, otherNumbers, 345]

console.log(numbers)
console.log(numbersWithoutSpread)

//Spread operator on Objects

const person2 = {
  nombre: "Luisito",
  apellido: "Comunica",
  direccion: "direccion random",
}

const addressPerson2 = {
  avenue: "",
  number: "120",
  cp: "55029",
}

//Fuse both person2 and addressPerson2 properties in a new obj
const userData = { ...person2, ...addressPerson2 }

console.log(userData) // {with prop from 2 previous objects}

//Destructure an object

// const { avenue, number } = addressPerson2
//returns

const { avenue, number, cp, ...rest } = addressPerson2
console.log(addressPerson2)
//returns

function getProp(addressPerson2) {
  const { avenue } = addressPerson2
  console.log(avenue, "avenue")
}

getProp(addressPerson2)

//Session 10 Exercises
