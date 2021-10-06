console.log("Metodos de String Sesion 3")

// Ejercicios

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "fernanda PALACIOS"
*/

function getName(name, lastName) {
  name = prompt("Cual es tu nombre? : ", "").toLowerCase()
  lastName = prompt("Cual es tu apellido? : ", "").toUpperCase()

  let fullName = `${name} ${lastName}`

  return fullName
}

/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

function getFullName(fullName) {
  fullName = prompt("Cual es tu nombre completo?: ", "")

  let fullNameCount = fullName.length

  return `Tu nombre completo tiene ${fullNameCount} caracteres`
}

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

function getVowelsCount(string) {
  string = prompt("Introduce tu nombre completo:", "")

  let vowelsCount = 0

  const vowels = [
    "a",
    "á",
    "A",
    "e",
    "é",
    "E",
    "i",
    "í",
    "I",
    "o",
    "ó",
    "O",
    "u",
    "ú",
    "U",
  ]

  for (let char of string) {
    if (vowels.includes(char)) {
      vowelsCount++
    }
  }

  return `Tu nombre contiene ${vowelsCount} vocales.`
}

// solucion 2 match method

function requestName() {
  const name = prompt("Cual es tu nombre completo?: ", "")

  const coincidences = name.match(/[aeiou]/g)

  return `Tu nombre tiene ${coincidences.length} vocales`
}

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

function replaceString() {
  let text = `Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado.`

  const match = text.match(/estudiante/g)

  console.log(`La palabra estudiante se ha usado ${match.length} veces.`)

  const replacedString = text.replaceAll("estudiante", "Koder")

  return `${replacedString}`
}

/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

//Solucion 2 (less dynamic)

function compareTwoWordsLength(string1, string2) {
  string1 = prompt("Escribe una palabra: ")
  string2 = prompt("Escribe una palabra: ")

  if (string1.length > string2.length) {
    return string1
  }

  if (string2.length > string1.length) {
    return string2
  }

  return `Ambas palabras tienen el mismo numero de caracteres`
}

// Solucion 1 para n cantidad de palabras en un string

function longestWord(string) {
  string = prompt("Escribe una frase: ")

  let words = string.split(" ")

  let longest = words.reduce(function (a, b) {
    return a.length > b.length ? a : b
  })

  return longest
}

// Tarea

/* Solicitar al usuario ingresar un numero
Crear una funcion que genere un string con caracteres aleatorios, 
la longitud del string debe ser igual que el numero que ingreso el usuario

input : 6
output: '?AQX>H' */
