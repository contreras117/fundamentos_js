function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() { 
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

let daniel = new Persona("Daniel", "Contreras", 1.90)
daniel.saludar()
daniel.soyAlto()


//Si declaro las funciones como arrow function estas no funcionan de la misma manera, ya 
//que en las arrow function this es igual al valor que tiene fuera de la function, que en este
//caso es window.
// Persona.prototype.saludar = () => { 
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.soyAlto = () =>  this.altura > 1.8