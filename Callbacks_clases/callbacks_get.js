const URL_API = "https://swapi.co/api/"
const PEOPLE_URL = "people/:id"


const lukeUrl = `${URL_API}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true} //La funcion get de de JQuery recibe un objeto con parametros para la consulta. El objeto crossDomain en TRUE indica que la consulta es un sitio externo.

const onPeopleResponse = persona => {
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts,onPeopleResponse)