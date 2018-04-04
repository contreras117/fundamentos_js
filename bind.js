/* --------------------------------------------------------------------------------Funcion bind----------------------------------------------------------------------------------------------------- */

/* La funcion bind regresa la misma funcion sobre la que fue invocado pero cambiando el scope o los argumentos que le especifiquemos */


class Toggeable 
{
  constructor (el)
  {
    this.el = el
    this.activated = false
    this.el.innerHTML = "Off"
    /* this.onClick = this.onClick.bind(this) */ /* Esto es lo mismo aplicar bind al onClick en el addEventListener */
    this.el.addEventListener("click", this.onClick.bind(this)) /* En este caso regresa la funcion onclick, pero especificando el scope a this */
  }

  onClick(ev)
  {
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText()
  {
    this.el.innerHTML = this.activated ? "On" : "Off"
  }
}

const boton = document.getElementById("boton")

const miBoton = new Toggeable(boton)





const saludar = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`)

const saludarDaniels = saludar.bind(undefined,"Daniel") /* Regresa la funcion saludar dejando fijo el primer parametro (nombre) */

saludarDaniels("Contreras")
 

/* --------------------------------------------------------------------------------Funcion bind----------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------Funcion call y apply----------------------------------------------------------------------------------------------------- */

/* call y apply al igual bind te permiten especificar el scope con el que se ejecuta la funcion, pero a diferencia de bind, estas no regresan una funcion con el nuevo scope aplicado, 
sino que la ejecutan. */

const daniel = 
{
  nombre: "Daniel",
  apellido: "Contreras"
}

function saludarN(veces,upperCase)
{
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = upperCase ? str.toUpperCase() : str
  console.log(str)
}

/* La diferencia entre call y apply es que en call podemos pasar los parametros de la funcion despues dek scope solo separados por ",". Mientras que en apply los parametros debemos pasarlos
como array */
saludarN.call(daniel, 3, true) 
saludarN.apply(daniel,[3,false])


/* --------------------------------------------------------------------------------Funcion call y apply----------------------------------------------------------------------------------------------------- */
