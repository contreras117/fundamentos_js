let daniel = { Nombre: "Daniel", Apellido: "Contreras", Edad: 25}

let tocayo = daniel

const cumpleanos = persona => {
    persona.Edad++
}

cumpleanos(tocayo)

console.log(tocayo.Edad) //26
console.log(daniel.Edad) //26

console.log(daniel === tocayo) //true 
/* El triple '=' sirve ademas de para hacer comparaciones estrictas como entre 3 y '3' (que compararia no solo el valor, sino tambien el tipo del dato), 
tambien sirve para comparar objetos entre si. En este caso ya que tanto tocayo como daniel apunta al mismo objeto, el resultado es "true"*/

/* En javascript cuando asignamos un objeto a una variable con "=" estamos asignando la posicion en memoria del objeto, de tal manera que ambas variables apuntan al mismo objeto.
Es por esto que en el codigo superior, al ejecutar la funcion "cumpleanos" la edad tanto de "tocayo" como de "daniel" se ve afectada. */




let daniel = { Nombre: "Daniel", Apellido: "Contreras", Edad: 25}

let tocayo = daniel

const cumpleanos = persona => {
    const clone = Object.assign({} , persona) /* La funcion asign del prototype "Object" recibe 2 objetos como parametros y asigna todas las propiedades del segundo al primero. Basicamente
    hace una copia del segundo en el primero. Pero lo importante es que son 2 objetos completamente distintos en distintas posiciones de memoria*/
    clone.Edad++
    return clone
}

/* Reescribiendo de esta manera la funcion cumpleanos se devuelve otro objeto clone al cual se le modifica la edad. De esta manera el objetos originales fuera de la funcion no se ven
afectados. Esto es algo que se debe buscar y uno de los principios de la programacion funcional. En toda funcion no se deben modificar variables que este fuera del scope de la funcion.
Es mejor crear nuevas variables y retornar los nuevos valores. De esta manera la funcion es independiente del resto del codigo, lo que evita efectos secundarios y facilita las pruebas. */

tocayo = cumpleanos(tocayo)

console.log(tocayo.Edad) //26
console.log(daniel.Edad) //25

console.log(daniel === tocayo) //false
/* En este caso ya que a tocayo se le asigno otro objeto resultado de la funcion cumpleanos, el valor de la comparacion es false */