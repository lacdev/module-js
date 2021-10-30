console.log("Homework Todo List Session 21")

const form = document.querySelector("#new-task-form")
const taskContainer = document.querySelector('.tasks-container')
const inputTitle = document.querySelector('#task-title')
const inputContent = document.querySelector('#task-content')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    createTask()
})

const createTask = () => {
    const card = document.createElement('div')
    card.classList.add('card')
    const titleText = document.createElement('h3')
    titleText.innerText = inputTitle.value
    card.appendChild(titleText)
    const contentText = document.createElement('p')
    contentText.textContent = inputContent.value
    card.appendChild(contentText)
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.textContent = "Eliminar Tarea"
    deleteButton.addEventListener('click', ()=> {
        card.remove()
    })
    card.appendChild(deleteButton)
    card.addEventListener('click', ()=> {
        removeBackground()
        card.style.backgroundColor = "#29ACFF" 
        card.style.color = "white"
    })
    taskContainer.appendChild(card)
    inputTitle.value = ""
    inputContent.value = ""
}

const removeBackground = () => { 
    document.querySelectorAll('.card').forEach((card) => {
        card.style.backgroundColor = "#ffffff"  
        card.style.color = "#303030"  
})
}
