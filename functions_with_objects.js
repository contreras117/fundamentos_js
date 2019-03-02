function printPerson(person = {name: "Fulanito", age: 10}){
    var {name} = person; // Manera de crear una nueva variable del mismo nombre que el atributo del objeto person, y tomando su valor.
    var {age} = person;
    console.log(`Hi, my name is ${name} and i am ${age} years old.`)
}

var daniel = {
    name: "Daniel",
    age: 26
}

var carlos = {
    name: "Carlos",
    age: 28
}

//Cuando se pasa un objeto como parametro a una funcion este se pasa como referencia, por lo que si hacen cambios en el, no solo se vera afectado en el scope de la funcion. Una solucion
//es crear un nuevo objeto con los mismos valores que tenia el original. Para esto usamos ... para desglisar el objeto person y llenar el nuevo objeto. Ademas podemos modificar atributos o agregar nuevos.
function birthday(person){
    return {
        ...person,
        age: person.age + 1
    }
}


function mayorDeEdad(person){
    if(person.age >= 18){
        console.log(`${person.name} es mayor de edad`)
    }
}