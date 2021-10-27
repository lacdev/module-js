console.log("Ajax and Dom Traversal")

// [
    //     {
    //         name:'ivan',
    //         lastName: 'Diaz',
    //     }
    // ]
    
    // -crear una function que me genere una persona
    // asignarle la funcion al boton para recolectar los datos el dinput
    // obtener el boton de guardar
    // asignarle un listener
    // detectar el evento click
    // con el callback obtener los datos de los inputs
    //con los datos obtenidos armar el objeto y almacenarlo en un arreglo 
    const personList = [
        {
            name:'penny',
            lastName: 'wise',
        },
        {
            name:'jason',
            lastName: 'vorhees',
        }
    ];
    const button = document.getElementById("savePerson");
    const inputs = document.querySelectorAll('input');
    const tBody = document.getElementById("list");
    console.log(tBody.firstElementChild)
    
    console.log(document.querySelector('tbody').closest('table'))
    const createPerson = () => {
        const person = {
            name:'',
            lastName:''
        }
        inputs.forEach((input) => {
            person[input.name] = input.value
        });
        personList.push(person);
    };
    
    const createRow = () => {
        while (tBody.lastElementChild) {
            tBody.removeChild(tBody.lastElementChild)
        }
        
        personList.forEach((person, index) => {
            const row = document.createElement('tr');
            const name = document.createElement('td');
            const lastName = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.setAttribute('data-person', index)
    
            name.textContent = person.name;
            lastName.textContent = person.lastName;
            removeButton.textContent = 'Delete';
            row.appendChild(name);
            row.appendChild(lastName);
            row.appendChild(removeButton);
            tBody.appendChild(row);
    
            removeButton.addEventListener('click', (event) => {
                console.log(event)
                removeButton.closest('tr').remove();
                console.log(personList)
                const personIndex = event.target.dataset.person;
                console.log(personIndex)
                personList.splice(personIndex, 1);
                console.log(personList, 'personList')
            });
        });
    };
    
    
    button.addEventListener('click', (e)=> {
        console.log(e)
        createPerson();
        createRow();
        console.log(inputs, 'inputs')
    });
    
    createRow()
    