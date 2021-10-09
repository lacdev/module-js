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

// Tomando en cuenta el array songsData

let songsData = [
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    },
  },
  {
    name: "Nikita",
    band: "Elton John",
    releaseYear: "1980",
    statistics: {
      likes: 9409483256,
      reproductions: 9843293,
    },
  },
  {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
  {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
      likes: 25000,
      reproductions: 100000,
    },
  },
  {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 95000,
    },
  },
  {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
      likes: 128000,
      reproductions: 915000,
    },
  },
  {
    name: "Daze",
    band: "Poets of the Fall",
    releaseYear: "2014",
    statistics: {
      likes: 3548413,
      reproductions: 87095138,
    },
  },
  {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
      likes: 26268856,
      reproductions: 2424568,
    },
  },
]

/* Ejercicio 1
input: 'The Cure'
output: {
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  }
} */

//Filtrar el arreglo por nombre de banda
//Iterar el arreglo con el ciclo for

const filterSong = function (songsData, band) {
  const concidences = []

  for (let i = 0; i < songsData.length; i++) {
    if (songsData[i].band === band) {
      concidences.push(songsData[i])
    }
  }

  return concidences
}

const result = filterSong(songsData, "The Cure")

console.log(result)

/* ----------------------------
Ejercicio 2
-Generar el top 5 de las canciones mas escuchadas
-Mostrar la cancion mas reciente
-Mostrar el artista mas gustado a los fans */

//iterrar arreglo songsData
//Crear el criterio de busqueda

const topFive = songsData
  .sort((a, b) => {
    return b.statistics.reproductions - a.statistics.reproductions
  })
  .slice(0, 5)

const newestSong = songsData
  .sort((a, b) => {
    return b.releaseYear - a.releaseYear
  })
  .slice(0, 1)

const mostLikedArtist = songsData
  .sort((a, b) => {
    return b.statistics.likes - a.statistics.likes
  })
  .slice(0, 1)

const compareAndLogData = function (property, list) {}
