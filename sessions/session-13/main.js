console.log("Constructor Functions")

const person = {
    name: "Dante",
    apellido: "Martinez"
}

//Funcion constructora de objeto string
// const test new String ('este es un string')

// function Persona (name) {
//     this
// }

// const person = {
//   name:'ivan',
//   paellisdo:'',
//   saludar: function (params) {
    
//   }
// };

// console.log(person.saludar())

// const number = [1,2,3]
// number[1]

// console.log(number)

// const test = new String('este es un string')
// console.log(test)


function Persona (name, lastName) {
    this.name = name;
    this.lastName = lastName;
};
  
// const otra = () => {
//   console.log(this);
// };
  
// console.log(otra())
  
// const person1 = new Persona('ivan', 'diaz')
  
const person2 = new Persona('German', 'Martinez')
  
Persona.prototype.saludar = function () {
    console.log(`hola soy ${this.name}`)
};

// console.log(person1)
console.log(person2)

function Koder () {

}

const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];
  console.log(koders)
  
/*

Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
Prototipo de tipo koder
Obtener la edad a partir de la fecha de nacimiento
Obtener promedio de sus scores
---
Colección de Koder que pertenezcan a JavaScript
Colección de Koder que pertenezcan a Python
{
javascrip: [
koder1
],
python: [
      
]
}

*/

function getAge (age) {
  const currentYear = new Date().getFullYear()
  age = age.slice(0,4)
  return currentYear - parseInt(age.slice(0,4))
}

function getPromedio (scores) {
  return scores.reduce((acum, next) => {
    return acum + next.score / scores.length
  },0)
}

function Koder (name, lastName, age, generation, bootcamp, promedio) {
    this.name = name
    this.lastName = lastName
    this.age = getAge(age)
    this.generation = generation
    this.bootcamp = bootcamp
    this.promedio = parseInt(getPromedio(promedio).toFixed(2))
}

const newKoders = koders.map(function(koder) {
    return new Koder(koder.name, koder.lastName, koder.birthday, koder.generation, koder.bootcamp, koder.scores)
})