console.log("Session 20 HTTP Methods")

//Crear una tabla.

const mentores = ['Mentores', 'HTML', 'CSS', 'JS', 'ReactJS']
const table = document.createElement('table')
const tdata = document.createElement('td')
const trow = document.createElement('tr')

document.body.appendChild(table)
table.appendChild(trow) 

mentores.forEach((head) => {
    const thead = document.createElement('th')
    trow.appendChild(thead)
    thead.setAttribute('class', head)
    thead.textContent = head
})

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

const newArray = []

const postUsers = (name) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', ()=> {
        console.log(xhr.readyState)
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr)
        } 
    })
    const URL = 'https://js-14va-default-rtdb.firebaseio.com/german/.json'
    console.log(xhr)
    xhr.open('POST', URL, true)
    xhr.send(JSON.stringify({name}))
}

mentorsArray.forEach((mentor) => {
    const trow = document.createElement('tr')
    table.appendChild(trow)
    trow.setAttribute('id', mentor.name)
    trow.textContent = mentor.name
    table.appendChild(trow)
    trow.textContent = `${mentor.name}`
    mentor.scores.forEach((materia) => {
        const tdata = document.createElement('td')
        trow.appendChild(tdata)
        tdata.textContent = materia.score   
    })
    const button = document.createElement('button')
        button.textContent = 'Post Mentor'
        button.setAttribute('data-mentor', mentor.name)
        trow.appendChild(button)
        button.addEventListener('click', (event)=> {
        // button.closest('tr').remove()
        // console.log(event.target.dataset.mentor)
        postUsers(event.target.dataset.mentor)
    })
})

/* 

// {"name": "Ivan Diaz", "HTML": 8, "CSS": 10, "JS": 8 "ReactJS": 8}

//La base de datos ya tiene nuestros JSON. (POST)
//Traernos esos JSON convertirlos a dato primitivo y renderizarlos en la pagina. (GET)
//Hay que crear el objeto o valor primitivo de forma dinamica con un for in.
//Agregar el boton de delete para eliminarlos de la base de datos.  (DELETE)

//Este json lo vamos a mandar a firebase.

//Crear un objeto por cada td de la tabla.

*/

// const names = document.querySelector("[data-mentor]")

// postUsers(name)

// const ul = document.createElement('ul')
// document.body.appendChild(ul)

// const renderUsers = (users) => {
//     users.forEach((user) => {
//         showUser(user)
//     })
// }

// const showUser = (user) => {
//     const li = document.createElement('li')
//     li.textContent = user.name
//     ul.appendChild(li)
//     //Crear elementos en el DOM: nombre de user
// }

// function getUsers () {
//     //Instanciamos la clase
// const xhr = new XMLHttpRequest()

// xhr.addEventListener('readystatechange', ()=> {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//     //JSON.parse() este metodo te convierte de JSON > tipo de dato primitivo.
//     //JSON.stringify() este metodo te convierte de tipo de dato primitivo a JSON.
//     console.log(xhr)
//     console.log(xhr.responseText)
//     const response = JSON.parse(xhr.responseText)
//     console.log(response)
//     renderUsers(response) 
//     } else {
//         console.log('there was an error')
//     }
//     console.log(xhr)
// })

// //Declaramos el endpoint
// const URL = 'https://jsonplaceholder.typicode.com/users'
// console.log(xhr)
// xhr.open('GET', URL, true)
// xhr.send()
// }
    
// getUsers()

// const postUsers = (name, lastName) => {
//     const xhr = new XMLHttpRequest()
//     xhr.addEventListener('readystatechange', ()=> {
//         console.log(xhr.readyState)
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr)
//         } 
//     })
//     const URL = 'https://js-14va-default-rtdb.firebaseio.com/german/.json'
//     console.log(xhr)
//     xhr.open('POST', URL, true)
//     xhr.send(JSON.stringify({name, lastName}))
// }


// const deleteUser = (userId) => {
//     const xhr = new XMLHttpRequest
//     const URL = 'https://js-14va-default-rtdb.firebaseio.com/.json'
//     xhr.addEventListener('readystatechange', ()=> {
//         if(xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 console.log(xhr.responseText)
//             }
//         }
//         else {
//             console.log(xhr.readyState)
//         }
//     })
//     xhr.open('DELETE', URL, true)
//     xhr.send()
// }