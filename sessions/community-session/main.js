console.log("Community Session Javascript")

const bookList = [
    {
        name : "The Lightning Thief",
        author : "Rick Riordan",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 5,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "Old Possum's Book of Practical Cats",
        author : "T. S. Eliot",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 3,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "The Everything Book of Cats and Kittens",
        author : "DK",
        genre_s : "Suspense",
        inStock : true,
        pages : 120,
        ratingCount: 2,
        price: {
            amount:5.99,
            currencyCode:"USD"
        },
        publishedDate:"2018-06-12",
        tags :[
            "Best Seller","Popular"
        ]
    },
    {
        name : "There are Cats in this Book",
        author : "Viviane Schwarz",
        genre_s : "Didactic",
        inStock : true,
        pages : 220,
        ratingCount: 4,
        price: {
            amount:17.99,
            currencyCode:"USD"
        },
        publishedDate:"2008-06-12",
        tags :[
            "Cats","Animals"
        ]
    },
    {
        name : "Don Quijote",
        author : "Miguel de Cervantes",
        genre_s : "Literature",
        inStock : false,
        pages : 520,
        ratingCount: 7,
        price: {
            amount:47.99,
            currencyCode:"USD"
        },
        publishedDate:"1990-06-12",
        tags :[
            "Best Seller","Reference"
        ]
    },
    {
        name : "The lord of the rings",
        author : "J.R.R. Tolkien",
        genre_s : "fantasy",
        inStock : false,
        pages : 620,
        ratingCount: 9,
        price: {
            amount:59.99,
            currencyCode:"USD"
        },
        publishedDate:"2001-06-12",
        tags :[
            "Swords","Golum"
        ]
    },
    {
        name : "Harry Potter and the Philosopher's Stone",
        author : "J.K. Rowling.",
        genre_s : "fantasy",
        inStock : true,
        pages : 820,
        ratingCount: 10,
        price: {
            amount:99.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Magician","Harry Potter"
        ]
    },
    {
        name : "The Hobbit",
        author : "J.R.R. Tolkien.",
        genre_s : "fantasy",
        inStock : true,
        pages : 1220,
        ratingCount: 8,
        price: {
            amount:69.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Golum","Dragons","Best Seller"
        ]
    },
];


// Fucnion declarativa 

[1,2].forEach(() => {});

function name(params) {
    return
};

const numbers = [1, 2,4];


const getResult = (array, callback) => {
    
};

const promediar = () => {
console.log('funcion prodemdiar')
};

getResult(numbers, promediar )


// Funcion de expresion 

// Obtener todos los tags que existen
// Ordenar los libros en orden alfabetico
// realizar filtrado dinamico por genero,
// realizar busqueda por titulo, encontrar coincidencias
// obtener top 3 de los libros mas rankeados
// obtener los 3 libros mas baratos
// obtener el libro con fecha de publicacion mas reciente,
// obtener los libros fuera de stock



// Obtener todos los tags que existen

//Crear una function 
//Iterar sobre el array de bookList
//Buscar la propiedad tag dentro del objeto en turno
//Ir a la propiedad tag del libro en turno
//Iterar la propiedad tag
//Ir tag por tag en la propiedad.
//Crear variable para guardar los tags
//Si el tag no se encuentra en la variable a devolver, insertar
// el tag en la variable a devolver
// devolver la variable

const getBookTags = () => {
    const tags = []
        bookList.forEach((book) => {
            book.tags.forEach((tag)=>{
                if (!tags.includes(tag))
                tags.push(tag)
            })
        })
    return tags
}

// Ordenar los libros en orden alfabetico tomando el nombre

/* 
Crear funcion
Iterar el arreglo de libros
Tomar el nombre de cada libro
Usar el metodo sort para ordenarlo
Retonar el arreglo ordenado
*/

const sortBooksByName = () => {
return bookList.sort((book1, book2) => {
            a = book1.name.toUpperCase(),
            b = book2.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
}

// realizar filtrado dinamico por genero,

//Return [{},{},{}]

//Escribir funcion que reciba el genero como parametro
//Usar filter. reduce para iterar el arreglo
//Retornar el arreglo filtrado

const getBooksByGenre = (genre) => {
    return bookList.filter((book) => {
        return book.genre_s === genre
    })
}

// realizar busqueda por titulo, encontrar coincidencias

/* 

Generar la function que escriba parametro
el nombre a buscar
Crear un arreglo varia donde guardemos los libros con 
coincidencias
Usar un filter usando de condiciones una expresion regular 
o usando includes
Retornar el arreglo con los libros con coincidencias

*/

//Includes solution

const searchForBooksByTitle = (string) => {
    return bookList.filter((book) => {
        return book.name.includes(string)
    })
}

//Regex Solution

const searchForBooksByTitleRegex = (string) => {
    return bookList.filter((book) => {
        const regex = new RegExp(string, 'g')
        return book.name.match(regex)
    })
}

// obtener top 3 de los libros mas rankeados

const getTop3RankedBooks = () => {

    const sortedBooksByRating =  bookList.sort((a, b)=> {
     return b.ratingCount - a.ratingCount
    })

    const top3books = []

     sortedBooksByRating.forEach((book) => {
        if (top3books.length < 3) {
            top3books.push(book)
        }
    })

    return top3books
    
}

// obtener los 3 libros mas baratos

const getTop3CheapestBooks = () => {
    const sortedBooksByPrice =  bookList.sort((a, b)=> {
        return a.price.amount - b.price.amount
       })
       
       const top3books = []
   
        sortedBooksByPrice.forEach((book) => {
           if (top3books.length < 3) {
               top3books.push(book)
           }
       })
   
       return top3books
}

// obtener el libro con fecha de publicacion mas reciente

const getMostRecentBook = () => {
    const mostRecentBooks = bookList.sort((a,b) => {
        return parseInt(b.publishedDate) - parseInt(a.publishedDate)
    })

    const topBook = []

    mostRecentBooks.forEach((book) => {
        if (topBook.length < 1) {
            topBook.push(book)
        }
    })

    return topBook

}

// obtener los libros fuera de stock

const getOutOfStockBooks = () => {
  return bookList.filter((book)=>{
        return book.inStock === false 
    })
}

