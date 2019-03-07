//En javascript no existe la herencia, ya que no existen las clases. Sin embargo existe la herencia prototipal, la cual permite que si una funcion no es encontrada en el 
//prototype de un objeto, esta sera buscada en el prototype de este prototype y asi sucesivamente has ta llegar al prototype object.
//Este primer ejemploe era la manera anterior a ECMASCRIPT 2015 de como realizar la herencia prototipal.

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function Programador(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
    prototipoHijo.prototype.constructor = prototipoHijo

}

Persona.prototype.saludar = function() { 
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

heredaDe(Programador, Persona)


Programador.prototype.saludar = function (){
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy programador/a`)
}

let daniel = new Programador("Daniel", "Contreras", 1.90)
let carlos = new Persona("Carlos", "Contreras", 1.88)



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////