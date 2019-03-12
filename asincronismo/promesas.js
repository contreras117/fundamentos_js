const URL_API = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"


const opts = { crossDomain: true} 



function obtenerPersonaje(id) {
    return new Promise((resolve, reject)=> {
        const url = `${URL_API}${PEOPLE_URL.replace(':id',id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        })
        .fail(()=> reject(id))
    })
    // .then(personaje => {
    //     console.log(`Hola, yo soy ${personaje.name}`)
    // })
    // .catch(id => {
    //     console.log(`Sucedio un error al obtener el personaje ${id}`)
    // }) El then y catch tambien se pueden colocar al final de la declaracion de la promesa.
}


// obtenerPersonaje(1)
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(2) //La promesa que devuelve esta funcion es atendida en el siguiente `then`. Si no se escribe un then, no se hara nada con el valor de la promesa.
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(3)
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(4)
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(5)
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(6)
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
//     return obtenerPersonaje(7)
// })
// .then(personaje => {
//     console.log(`Hola, yo soy ${personaje.name}`)
// })
// .catch(id => {
//     console.log(`Sucedio un error al obtener el personaje ${id}`)
// })
//De esta manera se pueden encadenar promesas para resolverlas en serie.



let personajesID = [1,2,3,4,5,6,7]
let personajes = personajesID.map( id => obtenerPersonaje(id))

Promise
    .all(personajes)
    .then(() => console.table(personajes))
    .catch(onError)


function onError(id){
    console.log(`Error al obtner el personaje ${id}`)
}



/*

Las promesas son valores que aun no conocemos. Las promesas tienen tre estados:

pending
fullfilled
rejected

Las promesas se invocan de la siguiente forma:

new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )

*/