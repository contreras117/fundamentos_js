console.log(`Hola`)
setTimeout( () => console.log("1") , 1000)
setTimeout( () => console.log("2") , 1000)
setTimeout( () => console.log("3") , 1000)
console.log(`Adios`)

/* setTimeOut envia la funcion al webAPI y espera los milisegundos indicados
para poner la funcion en la cola de tareas.
El motor de JS esta checando constantemente si la pila esta vacia, y si lo esta
checa si la cola de tareas tiene tareas pendientes. Si esto se cumple las tareas mueve la tarea
de la cola a la pila, donde sera ejecutada.*/

setTimeout(() => {
  console.log("A")
}, 10000)

for (let i=0; i < 999999999; i++);

console.log("B")




/* ---------------------------------------------------------------------------------- */

const get = (URL, cb) =>
{ 
  const METHOD = "GET"
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function ()
  {
    console.log(`Estado: ${this.readyState}`)
    const DONE = 4
    const OK = 200
    if (this.readyState === DONE)
    {
      if(this.status === OK)
      {
        cb(null, JSON.parse(this.responseText))
      }
      else
      {
        cb(new Error(`Se produjo un error al realizar el request: ${this.status}`))
      }
    }
  }
  xhr.open(METHOD,URL)
  xhr.send(null)
  console.log("close")
}

const _handleError  = (err) =>
{
  console.log(`Request failed: ${err}`)
}

const getCharacter = ( url, character, cb) => get(`${url}${character}`, cb)

getCharacter("https://www.swapi.co/api/people/",1, (err, character) =>
{
  if(err) return _handleError(err)
  get(character.homeworld, (err, homeworld) =>
  {
    if(err) return _handleError(err)
    character.homeworld = homeworld
    console.log(`${character.name} nació en ${character.homeworld.name}`)
  })
})
