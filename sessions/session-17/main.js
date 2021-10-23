console.log("Event Listeners and forms")

/* 

Tenemos que crear un contador y dos botones.

Un boton tiene que sumar 
y el otro restar.

*/

let contador = 0

const acumulador = document.createElement('div')
acumulador.textContent = contador
document.body.appendChild(acumulador)

const contenedorBotones = document.createElement('div')
document.body.appendChild(contenedorBotones)

const botonRestar = document.createElement('button')
botonRestar.textContent = `Restar 1`
botonRestar.setAttribute('id', 'restar')
contenedorBotones.appendChild(botonRestar)

const botonSumar = document.createElement('button')
botonSumar.textContent = `Sumar 1`
botonSumar.setAttribute('id', 'sumar')
contenedorBotones.appendChild(botonSumar)

function sumarContador () {
    contador += 1
    acumulador.textContent = contador
}
    
function restarContador () {
    contador -= 1
    acumulador.textContent = contador
}

const botones = contenedorBotones.querySelectorAll('button')

botones.forEach((button)=> {
    button.addEventListener('click', (event)=> {
        if (event.target.id === 'restar') {
            restarContador()
        }
        if (event.target.id === 'sumar') {
            sumarContador()
        }
    })
})








