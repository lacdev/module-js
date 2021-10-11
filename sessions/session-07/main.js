console.log("Session 07: forEach and arrow functions")

const carritoDeCompras = [
  {
    name: "Coca lata 355ml",
    description: "Coca lata 355ml",
    price: 11,
    type: "drink",
  },
  {
    name: "Boing Mango 500ml",
    description: "Boing Mango 500ml",
    price: 10,
    type: "drink",
  },
  {
    name: "Boing Mango 1lt",
    description: "Boing Mango 1lt",
    price: 18,
    type: "drink",
  },
  {
    name: "Coca-Cola 3lt No Retornable",
    description: "Coca-Cola 3lt No Retornable",
    price: 40,
    type: "drink",
  },
  {
    name: "Coca-Cola 600ml",
    description: "Coca-Cola 600ml",
    price: 14,
    type: "drink",
  },
  {
    name: "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t",
    description:
      "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t",
    price: 27.5,
    type: "chip",
  },
  {
    name: "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n",
    description:
      "Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n",
    price: 25.5,
    type: "chip",
  },
  {
    name: "Botanas Chips Papas Jalapeño 100 g",
    description: "Botanas Chips Papas Jalapeño 100 g",
    price: 29.7,
    type: "chip",
  },
  {
    name: "Botana Paketaxo Quexo 215 g",
    description: "Botana Paketaxo Quexo 215 g",
    price: 52.8,
    type: "chip",
  },
  {
    name: "Botana Doritos Incógnita 64 g",
    description: "Botana Doritos Incógnita 64 g",
    price: 18.15,
    type: "chip",
  },
  {
    name: "Botana Fritos Sal y Limón 57 g",
    description: "Botana Fritos Sal y Limón 57 g",
    price: 15.4,
    type: "chip",
  },
  {
    name: "Botana Doritos Nacho 58 g",
    description: "Botana Doritos Nacho 58 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Botana Doritos Flamin Hot 62 g",
    description: "Botana Doritos Flamin Hot 62 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Botanas Chips Papas Fuego Limón 100 g",
    price: 29.7,
    type: "chip",
  },
  {
    name: "Papas Sabritas Original 42 g",
    description: "Papas Sabritas Original 42 g",
    price: 17.6,
    type: "chip",
  },
  {
    name: "Papas Sabritas Adobadas 42 g",
    description: "Papas Sabritas Adobadas 42 g",
    price: 16.5,
    type: "chip",
  },
  {
    name: "Cacahuates Hot Nuts Multintenso 50 g",
    description: "Cacahuates Hot Nuts Multintenso 50 g",
    price: 11,
    type: "chip",
  },
  {
    name: "Botana Fritos Chorizo Chipotle 57 g",
    description: "Botana Fritos Chorizo Chipotle 57 g",
    price: 15.95,
    type: "chip",
  },
  {
    name: "Botana Chips Sal de Mar Bolsa 170 g",
    description: "Botana Chips Sal de Mar Bolsa 170 g",
    price: 49.5,
    type: "chip",
  },
  {
    name: "Botana Cheetos Poffs 100 g",
    description: "Botana Cheetos Poffs 100 g",
    price: 34.1,
    type: "chip",
  },
  {
    name: "Papas Fritas Stax Cheddar 156 g",
    description: "Papas Fritas Stax Cheddar 156 g",
    price: 47.85,
    type: "chip",
  },
  {
    name: "Papas Sabritas Original 240 g",
    description: "Papas Sabritas Original 240 g",
    price: 75.35,
    type: "chip",
  },
  {
    name: "Botana Doritos Nacho 370 g",
    description: "Botana Doritos Nacho 370 g",
    price: 82.5,
    type: "chip",
  },
  {
    name: "Chicharrón de Cerdo Sabritas 115 g",
    description: "Chicharrón de Cerdo Sabritas 115 g",
    price: 55,
    type: "chip",
  },
  {
    name: "Botana Cheetos Torciditos 150 g",
    description: "Botana Cheetos Torciditos 150 g",
    price: 34.1,
    type: "chip",
  },
  {
    name: "Papas Ruffles Queso 290 G",
    description: "Papas Ruffles Queso 290 G",
    price: 71.5,
    type: "chip",
  },
  {
    name: "Dip Tostitos Queso Suave 255 g",
    description: "Dip Tostitos Queso Suave 255 g",
    price: 69.3,
    type: "chip",
  },
]

/*
 Práctica:
   - obtener los productos de tipo chips en el arreglo carritoDeCompras
   - obtener los productos de tipo drink en un arreglo
   - obtener todos los productos < a $50
    - obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/

//Solucion 1

const getType = (carritoDeCompras, argumento) => {
  const coincidencias = []

  carritoDeCompras.forEach((producto) => {
    if (producto.type === argumento) coincidencias.push(producto)
  })

  console.log(coincidencias)

  return `Encontramos ${coincidencias.length} productos del tipo ${argumento} en tu carrito de compras`
}

const sortProductsByValue = (carritoDeCompras) => {
  const lessThanFifty = []
  const morethanFifty = []

  carritoDeCompras.forEach((producto) => {
    if (producto.price < 50) {
      lessThanFifty.push(producto)
    } else morethanFifty.push(producto)
  })

  console.log(lessThanFifty)

  console.log(morethanFifty)

  return `Tu carrito tiene ${lessThanFifty.length} productos con un valor menor a $50MXN y ${morethanFifty.length} productos con un valor mayor o igual a $50MXN.`
}

const sumTotalCartPrice = (carritoDeCompras) => {
  let precioTotal = 0

  carritoDeCompras.forEach((producto) => {
    precioTotal += producto.price
  })

  return `El valor total de los productos de tu carrito es de $${precioTotal}MXN`
}

const sumTypeTotal = (carritoDeCompras, argumento) => {
  let precioTotal = 0

  carritoDeCompras.forEach((producto) => {
    if (producto.type === argumento) precioTotal += producto.price
  })

  return `El valor total de los productos del tipo ${argumento} en tu carrito es de $${precioTotal.toFixed(
    2
  )}MXN`
}

//Solucion 2 Array Methods

/*
 Práctica:
   - obtener los productos de tipo chips en el arreglo carritoDeCompras
   - obtener los productos de tipo drink en un arreglo
   - obtener todos los productos < a $50
    - obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/

// obtener los productos de tipo chip en el arreglo carritoDeCompras
// obtener los productos de tipo drink en el arreglo carritoDeCompras
// obtener todos los productos < a $50
//- obtener >= $50

const filterByType = (carritoDeCompras, argumento) => {
  const filterProducts = carritoDeCompras.filter((producto) => {
    if (argumento === Number(argumento)) {
      if (argumento < 50) return producto.price < 50

      if (argumento >= 50) return producto.price >= 50
    }

    return producto.type.includes(argumento)
  })

  return filterProducts
}

//obtener el inventario total en valor de los productos tipo drink
//obtener el inventario total en valor de los productos tipo chips
// obtener el inventario total en valor de todos los productos

const sumTotal = (carritoDeCompras, argumento) => {
  const productsTotalPrice = carritoDeCompras.reduce((sum, producto) => {
    if (argumento == null || argumento == undefined) return sum + producto.price

    return producto.type.includes(argumento) ? sum : sum + producto.price
  }, 0)

  return parseInt(productsTotalPrice.toFixed(2))
}
