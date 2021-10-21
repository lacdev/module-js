console.log("Session 15 Document Object Model")
console.log(document)

const h1 = document.createElement('h1')
const text = document.createTextNode('Hola Koders')
h1.appendChild(text)
console.log(h1)
document.body.appendChild(h1)


const personas = [
    'arnold',
    'gerald',
    'helga',
]

const ul = document.createElement('ul')

personas.forEach((persona)=> {
    const li = document.createElement('li')
    const text = document.createTextNode(persona)
    li.appendChild(text)
    ul.appendChild(li)
})

document.body.appendChild(ul)

//------------------------------------------------------------

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

// const table = document.createElement('table')  
// const thead = document.createElement('thead')
// const tbody = document.createElement('tbody')
// const tfoot = document.createElement('tfoot')
// const trow = document.createElement('tr')
// const tdata = document.createElement('td')

// document.body.appendChild(table)
// table.appendChild(thead)
// table.appendChild(tbody)
// table.appendChild(tfoot)
// tbody.appendChild(trow)
// tbody.appendChild(tdata)

// function createTable (mentorsArray) {
// const table = document.createElement('table') 
// const thead = document.createElement('thead')
// // const tbody = document.createElement('tbody')
// // const tfoot = document.createElement('tfoot')
// // const trow = document.createElement('tr')
// // const tdata = document.createElement('td')

//     mentorsArray.forEach((mentor)=> {
//     const trow = document.createElement('tr')

//     })
// }

//-----------------------------------------------------------

const table = document.createElement("table")
const thead = document.createElement("thead")
const trow = document.createElement("tr")
let fields = ["Mentor", "HTML", "CSS", "JS", "ReactJS" ,"Promedio"]
 
const cabecera = fields.forEach((item) => {
    const td = document.createElement("td")
    const text = document.createTextNode(item)
    td.appendChild(text)
    trow.appendChild(td)
})
thead.appendChild(trow)
table.appendChild(thead)
document.body.appendChild(table)
