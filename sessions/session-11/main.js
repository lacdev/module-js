console.log("Session 11 songs exercise reduce")

const songsData = [
  {
    name: "¿Dónde jugarán los niños?",
    band: "Maná",
    releaseYear: "1992",
    statistics: {
      likes: 20000,
      reproductions: 8000,
    },
  },
  {
    name: "La muralla verde",
    band: "Enanitos Verdes",
    releaseYear: "1986",
    statistics: {
      likes: 21000,
      reproductions: 19000,
    },
  },
  {
    name: "Te Ví En Un Tren",
    band: "Enanitos Verdes",
    releaseYear: "1987",
    statistics: {
      likes: 20000,
      reproductions: 23490,
    },
  },
  {
    name: "Mariposa Traicionera",
    band: "Maná",
    releaseYear: "2002",
    statistics: {
      likes: 12000,
      reproductions: 25690,
    },
  },
  {
    name: "Rayando el Sol",
    band: "Maná",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 18000,
    },
  },
  {
    name: "La celula que explota",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12000,
      reproductions: 23421,
    },
  },
  {
    name: "No dejes que...",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12345,
      reproductions: 10000,
    },
  },
]

/*
Ejercicio:

- Agrupar los nombres de la bandas, que no esten repetidas
- Agrupar las canciones por banda
- La cancion con más reproducciones
- La cancion con más likes

*/

// - Agrupar los nombres de la bandas, que no esten repetidas

const filterBandsForEach = () => {
  filteredBands = []
  iterateBands = songsData.forEach((canciones) => {
    if (!filteredBands.includes(canciones.band)) {
      filteredBands.push(canciones.band)
    }
  })
  return filteredBands
}

const filterBandsWithMapAndFilter = () => {
  const filteredBands = songsData
    .map((song) => {
      return song.band
    })
    .filter((band, index, array) => {
      return array.indexOf(band) === index
    })

  return filteredBands
}

const filterBandsReduce = () => {
  const reducedBands = songsData.reduce((acum, current) => {
    return acum.includes(current.band) ? acum : acum.concat(current.band)
  }, [])
  return reducedBands
}

// - Agrupar las canciones por banda //Pendiente

const groupSongsByBand = () => {}

//Tiene que retornar:
/* [
  {
    band: 'mana',
    songs: [
     {cancion 1},
     {cancion 2},
    ]
   }
 ] */

//- La cancion con más reproducciones

const getMostPlayedSong = () => {
  const mostPlayedSong = songsData.reduce((previousSong, currentSong) => {
    return previousSong.statistics.reproductions >
      currentSong.statistics.reproductions
      ? previousSong
      : currentSong
  })
  return mostPlayedSong
}

// - La cancion con más likes

const getMostLikedSong = () => {
  const mostLikedSong = songsData.reduce((previousSong, currentSong) => {
    return previousSong.statistics.likes > currentSong.statistics.likes
      ? previousSong
      : currentSong
  })
  return mostLikedSong
}
