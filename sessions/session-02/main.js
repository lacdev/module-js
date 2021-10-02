// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola

function getANumber(number) {
  number = Number(prompt("Selecciona un number entre 1 y 100: "))

  if (number > 1 && number > 100) {
    return `Por favor elige un numero entre 1 y 100`
  }

  if (number % 2 === 0) {
    return `${number} es par`
  }
  return `${number} es impar`
}

// 2. Pedir al usuario 2 numeros
//    - Imprimir en consola cual es el menor de los 2
//    - Imprimir en consola cual es el mayor de los 2

function compareTwoNumbers(num1, num2) {
  num1 = Number(prompt("Selecciona el primer numero: "))
  num2 = Number(prompt("Selecciona el segundo numbero: "))

  if (num1 > num2) {
    return `${num1} es mayor a ${num2}`
  }
  return `${num1} es menor a ${num2}`
}

// 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

function CalculateLunarWeight(name, weight) {
  name = prompt("Cual es tu nombre?: ")

  weight = Number(prompt("Cual es tu peso actual en kg: "))

  let weightOnMoon = Math.round((weight / 9.81) * 1.622)

  return `${name} tu peso en la luna es de ${weightOnMoon}kg`
}

//Peso en la luna = peso en la tierra entre gravedad en la tierra * gravedad en la luna

// 4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
//    -Imprimir en consola las equivalencias en letra su calificación, es decir:

function calculateCalification(calificacion) {
  calificacion = Number(prompt("Cual fue tu calificacion?: "))

  if (calificacion < 1 || calificacion > 100)
    return `Por favor selecciona una calificacion entre 1 a 100`

  if (calificacion >= 90) {
    return `A`
  } else if (calificacion >= 80 && calificacion < 90) {
    return `B`
  } else if (calificacion >= 70 && calificacion < 80) {
    return `C`
  } else if (calificacion >= 60 && calificacion < 70) {
    return `D`
  } else if (calificacion >= 50 && calificacion < 60) {
    return `E`
  }

  return `F`
}

// si es mayor o igual a 90, imprimir "A"

// si es mayor o igual a 80 y menor que 90 , imprimir "B"

// si es mayor o igual a 70 y menor que 80 , imprimir "C"

// si es mayor o igual a 60 y menor que 70 , imprimir "D"

// si es mayor o igual a 50 y menor que 60 , imprimir "E"

// si es menor 50 , imprimir "F"
