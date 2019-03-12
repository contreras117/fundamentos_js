const URL_API = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"


const opts = { crossDomain: true} //La funcion get de de JQuery recibe un objeto con parametros para la consulta. El objeto crossDomain en TRUE indica que la consulta es un sitio externo.



function obtenerPersonaje(id, callback){
  let url = `${URL_API}${PEOPLE_URL.replace(':id',id)}`
  $.get(url, opts,callback).fail(() => {
      console.log(`Sucedio un error. No se pudo obtener el personaje ${id}.`)
  })
}

obtenerPersonaje(1, function(persona){
    console.log(`Hola yo soy, ${persona.name}`)

    obtenerPersonaje(2, function(persona){
        console.log(`Hola yo soy, ${persona.name}`)

        obtenerPersonaje(3, function(persona){
            console.log(`Hola yo soy, ${persona.name}`)

            obtenerPersonaje(4, function(persona){
                console.log(`Hola yo soy, ${persona.name}`)

                obtenerPersonaje(5, function(persona){
                    console.log(`Hola yo soy, ${persona.name}`)

                    obtenerPersonaje(6, function(persona){
                        console.log(`Hola yo soy, ${persona.name}`)

                        obtenerPersonaje(7, function(persona) {
                            console.log(`Hola yo soy, ${persona.name}`)
                        })
                        
                    })
                })
            })
        })
    })
})