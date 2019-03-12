const URL_API = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"


const opts = { crossDomain: true} //La funcion get de de JQuery recibe un objeto con parametros para la consulta. El objeto crossDomain en TRUE indica que la consulta es un sitio externo.



function obtenerPersonaje(id, callback){
  let url = `${URL_API}${PEOPLE_URL.replace(':id',id)}`
  $.get(url, opts, function(persona) {
    console.log(`Hola, yo soy, ${persona.name}`)

    if(callback){
      callback()
    }

  })
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})