console.log("Session 15 Document Object Model")

// console.log(document)
const h1 = document.createElement('h1')
// const text = document.createTextNode('Hola Koders')
// h1.appendChild(text)
// document.body.appendChild(h1)


// const personas = [
//     'arnold',
//     'gerald',
//     'helga',
// ]

// const ul = document.createElement('ul')

// personas.forEach((persona)=> {
//     const li = document.createElement('li')
//     const text = document.createTextNode(persona)
//     li.appendChild(text)
//     ul.appendChild(li)
// })

// document.body.appendChild(ul)

//------------------------------------------------------------

// Crear tabla con el sigueinte arreglo

[
  {
      name:"Ivan Diaz",
      html: 90,
      css:90,
      js:10,
      reactJs: 90,
      promedio: 9.3
  }
]

const mentorsArray = [
{
    name:"Ivan Diaz",
    scores:[
        {
            signature:"HTML",
            score:8
        },
        {
            signature:"CSS",
            score:10
        },
        {
            signature:"JS",
            score:8
        },
        {
            signature:"ReactJS",
            score:8
        }
    ]
},
{
    name:"Alan Medina",
    scores:[
        {
            signature:"HTML",
            score:8
        },
        {
            signature:"CSS",
            score:7
        },
        {
            signature:"JS",
            score:10
        },
        {
            signature:"ReactJS",
            score:10
        }
    ]
},
{
    name:"Elvira Camarillo",
    scores:[
        {
            signature:"HTML",
            score:9
        },
        {
            signature:"CSS",
            score:9
        },
        {
            signature:"JS",
            score:10
        },
        {
            signature:"ReactJS",
            score:9
        }
    ]
},
{
    name:"Alejandra Paez",
    scores:[
        {
            signature:"HTML",
            score:10
        },
        {
            signature:"CSS",
            score:10
        },
        {
            signature:"JS",
            score:10
        },
        {
            signature:"ReactJS",
            score:10
        },
    ]
},
]

const headers = [
  'Mentor',
  'HTML',
  'CSS',
  'JS',
  'REACT',
  'PROMEDIO',
];


// [
//     {
//         name:"Ivan Diaz",
//         html: 90,
//         css:90,
//         js:10,
//         reactJs: 90,
//         promedio: 9.3
//     }
// ]

const getMentors = mentorsArray.map(( mentor ) => {
  const data = {
      mentor: mentor.name,
  };
  let average = 0
  mentor.scores.forEach((signature) => {
      if(!data[signature.signature]) {
          data[signature.signature] = signature.score;
      }

      average += signature.score / mentor.scores.length;
  });

  data.average = average;
return data;
});

// Crear el tabla
// -Crear el thead de la tabla
// crear un row 
// Iterar un arreglo que tenga los heads
// crear un th por cada elemento de ese arreglo  


// -Crear Tbody de la tabla

const table = document.createElement('table');
const theadTable = document.createElement('thead');
const tr = document.createElement('tr');

headers.forEach((element) => {
  const th = document.createElement('th');
  const title = document.createTextNode(element);
  th.appendChild(title);
  tr.appendChild(th);
});

theadTable.appendChild(tr);
table.appendChild(theadTable);
// ---------------

const tbody = document.createElement('tbody');
getMentors.forEach((mentor) => {
  const trBody = document.createElement('tr');

  for(element in mentor) {
      const td = document.createElement('td');
      td.textContent = mentor[element];
      trBody.appendChild(td);
  }

  tbody.appendChild(trBody);
});

table.appendChild(tbody);
document.body.appendChild(table);

