class Persona
{
  constructor (nombre, amigos =[])
  {
    this.nombre = nombre
    this.amigos = amigos
  }

  /* Al usar this dentro de una funcion interna de un objeto (como en el metodo foreach del ejemplo)
  Para solucionar esto hay multiples soluciones.
  Una de ellas es guardar this dentro de una constante antes de invocar el foreach.
  Otra seria usar la funcion bind sobre la funcion foreach para que tome el this de afuera.
  Y la otra solucion es usar una arrow function, ya que estas automaticamente hacen el bind,
  como en la solucion anterior. */

 /*  listarAmigos ()
  {
    const _this = this
    this.amigos.forEach( function (amigo){
      console.log(`Hola soy ${_this.nombre} y soy amigo de ${amigo}`)
    })
  } */

/*     listarAmigos ()
  {
    this.amigos.forEach( function (amigo){
      console.log(`Hola soy ${this.nombre} y soy amigo de ${amigo}`)
    }.bind(this))
  } */

  listarAmigos ()
  {
    this.amigos.forEach( amigo => console.log(`Hola soy ${this.nombre} y soy amigo de ${amigo}`))
  } 

}

const daniel = new Persona("Daniel", ["Martin", "Miguel"])