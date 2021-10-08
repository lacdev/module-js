console.log("Session 5 - Array Methods")
/* array.push('newitem') Agrega un elemento al final del array
array.pop() Elimina el ultimo elemento del Array
array.shift() Elimina el primer elemento de un array
array.unshift('newitem') Agrega un elemento en la primera
posicion de un array
array.reverse() Invierte el orden de los elementos del array
array.concat(otherarray) crea un nuevo array concatenando
los elementos de ambos arrays, para ver el resultado hay que
almacenarlo en una nueva variable * nuevo array
array.includes('', position) busca en el array si el argumento
existe en la posicion seleccionada ( o sin marcar posicion) */

/* Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.

Ejemplo:
input   
   - Freddy Krueger
   - Michael Myers
   - Jason Vorhees

output: 
    koder 1: Freddy Krueger
    koder 2: Michael Myers
    koder 3: Jason Vorhees */

let numberOfKoders = 0

const koders = []

function indicateNumber(number) {
  do {
    number = Number(prompt("Indica el numero de Koders a guardar: "))
  } while (number < 1 || isNaN(number))

  numberOfKoders = number

  return numberOfKoders
}

function saveKoderName(number) {
  number = numberOfKoders

  for (i = 0; i < number; i++) {
    let koderName = prompt("Introduce el nombre del Koder: ")

    let fixedName =
      koderName[0].toUpperCase() + koderName.slice(1).toLowerCase()

    let koderLastName = prompt("Introduce el primer apellido del Koder: ")

    let fixedLastName =
      koderLastName[0].toUpperCase() + koderLastName.slice(1).toLowerCase()

    fixedFullName = `${fixedName} ${fixedLastName}`

    koders.push(fixedFullName)
  }
}

function printKodersList() {
  for (i = 1; i <= koders.length; i++) {
    console.log(`Koder ${[i]}: ${koders[i - 1]}`)
  }
}

function performKoderTask() {
  indicateNumber()
  saveKoderName()
  printKodersList()
}

//Reverse String

// Solucion 1

function reverseString(string) {
  string = prompt("Introduce un texto: ")

  let reversedString = string.split("").reverse().join("")

  return reversedString
}

// Solucion 2

function reverseString2(string) {
  string = prompt("Introduce un texto: ")

  let newString = ""

  for (i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }

  return newString
}
