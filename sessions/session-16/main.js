console.log("Session 16 DOM")

// let items = document.getElementsByTagName('li')
// let items = document.getElementsByClassName('item list')
// let items = document.getElementById('ul')

//Individual
// const itemQuery = document.querySelector('#ul')

//Para todos los elementos
// const itemQuery = document.querySelectorAll('.item-list')

// console.log(itemQuery)

// itemQuery.forEach((li)=>{
//     li.classList.add('bg-success')
//     li.classList.remove('item-list')
// })

const button = document.querySelector('#btn-one')

button.addEventListener('click', (event)=>{
    console.log(event.target, "se dio click!!!")
})

