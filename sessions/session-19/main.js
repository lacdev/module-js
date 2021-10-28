console.log("Session 19 AJAX and HTTP Methods")

const ul = document.createElement('ul')
document.body.appendChild(ul)

const renderUsers = (users) => {
    users.forEach((user) => {
        showUser(user)
    })
}

const showUser = (user) => {
    const li = document.createElement('li')
    li.textContent = user.name
    ul.appendChild(li)
    //Crear elementos en el DOM: nombre de user
}

function getUsers () {
    //Instanciamos la clase
const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', ()=> {
    if (xhr.readyState === 4 && xhr.status === 200) {
    //JSON.parse() este metodo te convierte de JSON > tipo de dato primitivo.
    //JSON.stringify() este metodo te convierte de tipo de dato primitivo a JSON.
    console.log(xhr)
    console.log(xhr.responseText)
    const response = JSON.parse(xhr.responseText)
    console.log(response)
    renderUsers(response) 
    } else {
        console.log('there was an error')
    }
    console.log(xhr)
})

//Declaramos el endpoint
const URL = 'https://jsonplaceholder.typicode.com/users'
console.log(xhr)
xhr.open('GET', URL, true)
xhr.send()
}
    
getUsers()

const postUsers = (name, lastName) => {
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
    xhr.send(JSON.stringify({name, lastName}))
}


const deleteUser = (userId) => {
    const xhr = new XMLHttpRequest
    const URL = 'https://js-14va-default-rtdb.firebaseio.com/.json'
    xhr.addEventListener('readystatechange', ()=> {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText)
            }
        }
        else {
            console.log(xhr.readyState)
        }
    })
    xhr.open('DELETE', URL, true)
    xhr.send()
}

//Object.keys
//Object.values
//Object.entries

//Post mentors in our firebase directory.
//Get mentors posted in firebase.
//Render mentors in our HTML as a table from firebase.
