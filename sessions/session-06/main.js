console.log("Sesion 6 Objetos")

const persona = {
  nombre: "Freddy",
}

//Formas de acceder a un objeto

console.log(persona["nombre"])
console.log(persona.nombre)

persona["apellido"] = "Krueger"
persona.apellido = "Krueger"
persona.edad = 15

persona.saludar = function (saludo) {
  return saludo
}

console.log(persona.saludar("hola"))
