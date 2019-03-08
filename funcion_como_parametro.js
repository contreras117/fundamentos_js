class Persona{

    constructor(nombre,apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        //let nombre = this.nombre
        //let apellido = this.apellido

        //Esta es una manera mas corta de escribir las dos lineas de arriba para crear las variables nombre y apellido
        let {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)

        if(fn){
            fn(nombre,apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre,apellido,altura)
    }

    saludar(fn) {
        let {nombre, apellido} = this
        console.log(`Hola soy ${nombre} ${apellido} y soy programador/a`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, dev){
    console.log(`Buen dia ${nombre} ${apellido}.`)
    if(dev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a.`)
    }
}

let daniel = new Desarrollador("Daniel", "Contreras", 1.90)
let carlos = new Persona("Carlos", "Contreras", 1.88)
let andrea = new Persona("Andrea", "Contreras", 1.80)

daniel.saludar(responderSaludo)
carlos.saludar(responderSaludo)
andrea.saludar()
