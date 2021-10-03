console.log("Tarea Sesion 2: Casa de Cambio")

/*---------Tarea----------
Casa de cambio

Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), 
tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de
 cambio para hacer la conversion de  la cantidad capturada. ejemplo

1-¿Que cantidad en MXN deseas convertir ?
R= 1500 MXN
2¿A que pais vas a viajar?
R= USA

salida de la funcion: '$1500MXN (moneda local elegida por el koder) equivale
 a $750USD(moneda del pais ingresado por el usuario)'

Considerar minimo 4 tipo de monedas */

const currencies = ["MXN", "USD", "GBP", "EUR", "CAD", "YEN", "AUD", "RMB"]

const yenCountries = ["japan", "japon", "japón"]

const usdCountries = [
  "usa",
  "us",
  "estados unidos",
  "united states",
  "puerto rico",
  "el salvador",
]

const rmbCountries = ["china"]

const eurCountries = [
  "austria",
  "belgica",
  "chipre",
  "estonia",
  "finlandia",
  "francia",
  "alemania",
  "grecia",
  "irlanda",
  "italia",
  "latvia",
  "lituania",
  "luxemburgo",
  "malta",
  "holanda",
  "portugal",
  "españa",
  "eslovenia",
  "eslovaquia",
]

const audCountries = ["australia", "nueva zelanda", "new zealand"]

const cadCountries = ["canada"]

const gbpCountries = ["reino unido", "uk", "united kingdom"]

let countrySelection = ""

let moneyQuantity = 0

function getQuantity() {
  do {
    moneyQuantity = Number(
      prompt("Cual es la cantidad de dinero en MXN a convertir?: ")
    )
  } while (moneyQuantity < 0 || isNaN(moneyQuantity))

  moneyQuantity = Number.parseFloat(moneyQuantity.toFixed(2))

  return moneyQuantity
}

function getCountry() {
  countrySelection = prompt("A que pais vas a viajar?: ").toLowerCase()

  return countrySelection
}

function convertToYen(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 5.43

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor. ${moneyQuantity}${currencies[0]} equivalen a: ${convert}${currencies[5]} Buen viaje.`
}

function convertToUsd(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.049

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[1]} Buen viaje.`
}

function convertToGbp(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.036

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[2]} Buen viaje.`
}

function convertToEur(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.042

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[3]} Buen viaje.`
}

function convertToCad(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.062

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[4]} Buen viaje.`
}

function convertToAud(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.067

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[6]} Buen viaje.`
}

function convertToRmb(money, country) {
  money = moneyQuantity
  country = countrySelection

  MxnRealValue = 0.32

  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${currencies[7]} Buen viaje.`
}

function convertCurrency(cantidad, pais) {
  getQuantity()
  getCountry()
  cantidad = moneyQuantity
  pais = countrySelection

  if (usdCountries.includes(countrySelection)) {
    convertToUsd()
    return convertToUsd()
  }

  if (cadCountries.includes(countrySelection)) {
    convertToCad()
    return convertToCad()
  }

  if (gbpCountries.includes(countrySelection)) {
    convertToGbp()
    return convertToGbp()
  }

  if (eurCountries.includes(countrySelection)) {
    convertToEur()
    return convertToEur()
  }

  if (yenCountries.includes(countrySelection)) {
    convertToYen()
    return convertToYen()
  }

  if (audCountries.includes(countrySelection)) {
    convertToAud()
    return convertToAud()
  }

  if (rmbCountries.includes(countrySelection)) {
    convertToRmb()
    return convertToRmb()
  }

  return `Nuestra base de datos no cuenta con el pais seleccionado te pedimos una disculpa.`
}
