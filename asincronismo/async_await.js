const URL_API = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"


const OPTS = { crossDomain: true} 



function obtenerPersonaje(id) {
    return new Promise((resolve, reject)=> {
        const url = `${URL_API}${PEOPLE_URL.replace(':id',id)}`
        $.get(url, OPTS, function (data) {
            resolve(data)
        })
        .fail(()=> reject(id))
    })
}


async function resolverPersonajes() {
    let ids = [1,2,3,4,5,6,7]
    let promesas = ids.map( id => obtenerPersonaje(id))

    try{
        let personajes = await Promise.all(promesas)
        console.table(personajes) //la function table sirve para mostrar en consola arrays de una mejor manera.

    }catch(id){
        onError(id)
    }
}


function onError(id){
    console.log(`Error al obtner el personaje ${id}`)
}

resolverPersonajes()