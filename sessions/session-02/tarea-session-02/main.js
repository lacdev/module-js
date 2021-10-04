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

let typeOfCurrency = ""

let MxnRealValue = 0

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
  do {
    countrySelection = prompt("A que pais vas a viajar?: ").toLowerCase()
  } while (
    !(
      usdCountries.includes(countrySelection) ||
      yenCountries.includes(countrySelection) ||
      gbpCountries.includes(countrySelection) ||
      eurCountries.includes(countrySelection) ||
      cadCountries.includes(countrySelection) ||
      rmbCountries.includes(countrySelection) ||
      audCountries.includes(countrySelection)
    )
  )

  if (usdCountries.includes(countrySelection)) {
    MxnRealValue = 0.049
    typeOfCurrency = currencies[1]
  }

  if (gbpCountries.includes(countrySelection)) {
    MxnRealValue = 0.036
    typeOfCurrency = currencies[2]
  }

  if (eurCountries.includes(countrySelection)) {
    MxnRealValue = 0.042
    typeOfCurrency = currencies[3]
  }

  if (cadCountries.includes(countrySelection)) {
    MxnRealValue = 0.062
    typeOfCurrency = currencies[4]
  }

  if (yenCountries.includes(countrySelection)) {
    MxnRealValue = 5.43
    typeOfCurrency = currencies[5]
  }

  if (audCountries.includes(countrySelection)) {
    MxnRealValue = 0.067
    typeOfCurrency = currencies[6]
  }

  if (rmbCountries.includes(countrySelection)) {
    MxnRealValue = 0.32
    typeOfCurrency = currencies[7]
  }

  return countrySelection
}

function performConversion() {
  convert = Number.parseFloat((moneyQuantity * MxnRealValue).toFixed(2))

  return `Gracias por usar nuestro convertidor: ${moneyQuantity}${currencies[0]} equivalen a ${convert}${typeOfCurrency} Buen viaje.`
}

function convertCurrency() {
  getQuantity()
  getCountry()
  performConversion()

  return performConversion()
}
