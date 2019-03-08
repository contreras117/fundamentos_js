class Persona{

    constructor(nombre,apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.8
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre,apellido,altura)
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy programador/a`)
    }
}


let daniel = new Desarrollador("Daniel", "Contreras", 1.90)
let carlos = new Persona("Carlos", "Contreras", 1.88)
