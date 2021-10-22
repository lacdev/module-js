console.log("Class Constructors")

//Old Constructor syntax

function PersonaOld (name, lastName) {
     this.name = name
     this.lastName = lastName
} 

// Prototype function syntax old

PersonaOld.prototype.saludar = function () {
     console.log(`Hola soy ${this.name}`)
} 

//PrintStuff Constructor function 
function PrintStuff (myDocuments) {
  this.documents = myDocuments
}

//We add the print() method to PrintStuff constructor so that 
// other instances (objects) can inherit it:

PrintStuff.prototype.print = function () {
  console.log(this.documents)
}

//Create a new object with PrintStuff () constructor, thus
// allowing this new object to inherit PrintStuff's properties and
// methods. 

const newObj = new PrintStuff("I am a new Object and I can print")

//newObj inherited all the properties and methods, including the
// print method, from the PrinStuff constructor function.
// Now newObj can call print directly, even though we never 
//created a print () method on it.
newObj.print() 


//Class constructor Syntax new sugar syntax

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
    saludar() { //Declare methods with class constructors
        console.log(`Hola soy ${this.name}`)
    }
}

// const person1 = new Person("Thomas", "Pynchon")

// console.log(person1)
// console.log(person1.saludar())

// //Inheritance

// class Persona {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }
//     saludar(){
//         console.log(`Hola, soy ${this.name}`)
//     }
// }

// class Koder extends Persona {
//     constructor(name, lastName, bootcamp, generation) {
//         super(name, lastName)
//         this.bootcamp = bootcamp
//         this.generation = generation
//     }
// }

// const koder2 = new Koder ("Tony", "Stark", "Python", 14)

// //Inherits saludar method from Persona

// console.log(koder2)

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
javascript: [
koder1
],
python: [
      
]
}

*/

// Obtener la edad a partir de la fecha de nacimiento

function getAge (age) {
    const currentYear = new Date().getFullYear()
    age = age.slice(0,4)
    return currentYear - parseInt(age)
}
  
  // Obtener promedio de sus scores
  
  function getPromedio (scores) {
    return scores.reduce((acum, next) => {
      return acum + next.score / scores.length
    },0)
  }
  
class Koder {
    constructor(name, lastName, age, generation, bootcamp, average){
        this.name = name
        this.lastName = lastName
        this.age = getAge(age)
        this.generation = generation
        this.bootcamp = bootcamp
        this.average = parseInt(getPromedio(average).toFixed(2))
    }
}

const newKoders = koders.map((koder)=>{
    return new Koder(koder.name, koder.lastName, koder.birthday, koder.generation, koder.bootcamp, koder.scores)
})

console.log(newKoders)

const javascriptKoders = newKoders.filter( koder => koder.bootcamp === 'JavaScript')

const pythonKoders = newKoders.filter( koder => koder.bootcamp === 'Python')

//Agrupar con reduce

filterByBootcamp2 = (orderedKoders) =>{
    const result = orderedKoders.reduce((acum,item) => {
      acum[item.bootcamp] = acum[item.bootcamp] || [];
      acum[item.bootcamp].push(item);
      return acum;
    },{});
 return result;
}

console.log(filterByBootcamp2(newKoders));

