console.log("Session 19 exercise HTTP Methods")

const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10,
        },
        {
          signature: "JS",
          score: 8,
        },
        {
          signature: "ReactJS",
          score: 8,
        },
      ],
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 10,
        },
        {
          signature: "CSS",
          score: 10,
        },
        {
          signature: "JS",
          score: 10,
        },
        {
          signature: "ReactJS",
          score: 10,
        },
      ],
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9,
        },
        {
          signature: "CSS",
          score: 9,
        },
        {
          signature: "JS",
          score: 10,
        },
        {
          signature: "ReactJS",
          score: 9,
        },
      ],
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8,
        },
        {
          signature: "CSS",
          score: 10,
        },
        {
          signature: "JS",
          score: 9,
        },
        {
          signature: "ReactJS",
          score: 10,
        },
      ],
    },
]

//Post mentors in our firebase directory.
//Get mentors posted in firebase.
//Render mentors in our HTML as a table from firebase.

/* 

"{ 
    name: "Alejandra Paez",
    signatures: {
        HTML: "10",
        CSS: "7",
        React: "8",
        JS: "9"
    }
    promedio: "8"
}"

*/

//Post mentors in our firebase directory.

// const postUsers = (name, signatures, promedio) => {
//     // const xhr = new XMLHttpRequest()
//     // console.log(xhr)
//     // const URL = 'https://js-14va-default-rtdb.firebaseio.com/german/.json'
//     const xhr = new XMLHttpRequest()
//     console.log(xhr)

//     xhr.addEventListener('readystatechange', ()=> {
//         console.log(xhr.readyState)
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr)
//         } 
//     })

//     const URL = 'https://js-14va-default-rtdb.firebaseio.com/localApp/.json'
//     console.log(xhr)
//     xhr.open('POST', URL, true)
//     xhr.send(JSON.stringify({name, signatures, promedio}))
// }

// postUsers()


// const promedioMateria = (mentorsArray, nombreMateria) => {
//     let numeroDeMaterias = mentorsArray.length
//     let suma = 0
//     let promedio = 0
  
//     mentorsArray.forEach((profesor) => {
//       //Dentro de objeto profesor
//       profesor.scores.forEach((materia) => {
//         //Dentro de objeto materias
//         if (materia.signature === nombreMateria) {
//           suma += materia.score
//         }
//       })
//       promedio = suma / numeroDeMaterias
//     })
  
//     return { materia: nombreMateria, promedio }
// }

