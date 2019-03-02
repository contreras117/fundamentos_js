let base = 5;
let height = 5;

/* Se puede guardar una function anonima dentro de una variable e invocarse como una function de toda la vida.
Recomendable guardarla dentro de una constante con "const" ya que la funcion no va a cambiar */
const triangleArea = (base, height) => base * height / 2;
const circleArea =(radio) => Math.PI * Math.pow(radio, 2);
const rectangleArea = (base, height) => base * height;
const squareArea = (side) => Math.pow(side, 2);

/* Para insertar codigo dentro del texto, se debe usar las comillas invertidas '`'  alrededor del texto*/
console.log(`El area del triangulo de base ${base} y altura ${height} es : ${triangleArea(5,7)}` );

/* Se puede asignar un valor por defecto a los parametros de una funcion
para cuando se llama la funcion sin especificar su valor. */
function condicion (x, y, z = false)
{
  if (y){
    console.log(x);
  }
  else
  {
    console.log("Hola Mundo");
  }
}

/* SI se invoca una funcion sin uno de sus parametros, sera tomado como undefined, y en las condiciones if sera tomado como false. */
condicion(2);


/* -----------------------------------------------------------------------------Manejo de Strings---------------------------------------------------------------------------- */

const platzom = (str) => 
{
  let translation = str;

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayusculas y minusculas.

  const reverse = str => str.split('').reverse().join('');
  const minMay = str => str.split('').map( (char, index) => 
    index % 2 == 0 ? char.toUpperCase() : char.toLowerCase()).join('');

  if (str == reverse(str))
  {
    return minMay(str);
  }

  //Si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (translation.toLowerCase().endsWith("ar"))
  {
    /* Corta los ultimos dos caracteres de la cadena */
    translation = translation.slice(0, -2);
  }

  //Si la palabra termina con z, se le añade "pe" al final.
  if (translation.toLowerCase().startsWith("z"))
  {
    translation += "pe";
  }

  //Si la palabra traducida tiene mas 10 o mas letras, se parte a la mitad
  // y se une con un guion medio.
  const length = translation.length;
  if (length >= 10)
  {
    const firstHalf = translation.slice(0, Math.round(length/2));
    const secondHalf = translation.slice(Math.round(length/2));

    translation = `${firstHalf}-${secondHalf}`;
  }

  return translation;
}


/* -----------------------------------------------------------------------------Manejo de Strings---------------------------------------------------------------------------- */


/* -----------------------------------------------------------------------------------------------------------Pelea por turnos-------------------------------------------------------------- */

let lifeGoku = 100;
let lifeSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const bothAreStillAlive = () => lifeGoku > 0 && lifeSuperman > 0;
const calculateHit = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

let round = 0;

while (bothAreStillAlive())
{
  round ++;
  console.log(`Round ${round}`);

  const hitGoku = calculateHit();
  const hitSuperman = calculateHit();

  if (hitGoku > hitSuperman)
  {
    console.log(`Goku ataca a Superman con un golpe de ${hitGoku}`);
    lifeSuperman -= hitGoku;
    console.log(`Superman queda en ${lifeSuperman} de vida`);
  }
  else
  {
    console.log(`Superman ataca a Goku con un golpe de ${hitSuperman}`);
    lifeGoku -= hitSuperman;
    console.log(`Goku queda en ${lifeGoku} de vida`);
  }

}

if (lifeGoku > 0)
{
  console.log(`Goku ganó la pelea. Su vida es de: ${lifeGoku}`);
}
else
{
  console.log(`Superman ganó la pelea. Su vida es de: ${lifeSuperman}`);
}


/* -----------------------------------------------------------------------------------------------------------Pelea por turnos-------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------------Pelea por turnos con clases-------------------------------------------------------- */

class Fighter
{
  constructor(name)
  {
    this._name = name;
    this._life = 100;
    this._hit = 0;
  }

  get name()
  {
    return this._name;
  }

  get life()
  {
    return this._life;
  }

  get hit () 
  {
    return this._hit;
  }  
  
  calculateHit (min_power, max_power)
  {
    this._hit = Math.round(Math.random() * (max_power - min_power) + min_power)
  }

  stillAlive () 
  {
    return this._life > 0;
  }

  receiveHit (hit)
  { 
    this._life -= hit 
  }

}

const anakin = new Fighter("Anakin Skywalker");
const obiWan = new Fighter("Obi-Wan Kenobi");


function fight (fighter1, fighter2)
{
  const MIN_POWER = 5;
  const MAX_POWER = 12;
  let round = 0;
  while (fighter1.stillAlive() && fighter2.stillAlive())
  {
    round ++;
    console.log(`Round ${round}`);

    fighter1.calculateHit(MIN_POWER, MAX_POWER);
    fighter2.calculateHit(MIN_POWER, MAX_POWER);

    if(fighter1.hit > fighter2.hit)
    {
      console.log(`${fighter1.name} ataca a ${fighter2.name} con un golpe de ${fighter1.hit}`);
      fighter2.receiveHit(fighter1.hit);
      console.log(`${fighter2.name} queda en ${fighter2.life} de vida`);
    }
    else
    {
      console.log(`${fighter2.name} ataca a ${fighter1.name} con un golpe de ${fighter2.hit}`);
      fighter1.receiveHit(fighter2.hit);
      console.log(`${fighter1.name} queda en ${fighter1.life} de vida`);
    }
  }

  if (fighter1.stillAlive())
  {
    console.log(`${fighter1.name} ganó la pelea. Su vida es de: ${fighter1.life}`);
  }
  else
  {
    console.log(`${fighter2.name} ganó la pelea. Su vida es de: ${fighter2.life}`);
  }
    
}


/* --------------------------------------------------------------------------------------------------------Pelea por turnos con clases-------------------------------------------------------- */
 

/* --------------------------------------------------------------------------------------------------------Manejo de Fechas-------------------------------------------------------------------- */

/* Los meses van del 0 al 11 */
const nacimiento = new Date(1992, 7, 21); 

/* Regresa la fecha actual */
const today = new Date();

today.getFullYear(); /* Devuelve el año de la fecha */
today.getMonth(); /* Devuelve el mes de la fecha. Del 0 al 11 */
today.getDay(); /* Devuelve el dia de la semana. Del 0 al 6 */
today.getDate(); /* Devuelve el dia del mes */


/* --------------------------------------------------------------------------------------------------------Manejo de Fechas-------------------------------------------------------------------- */



/* ---------------------------------------------------------------------------------------------------Declaracion manual de objetos------------------------------------------------------------ */
const p1 ={
  x:0,
  y:4,
  moveOnX (incX) 
  {
    this.x += incX;
  },
  moveOnY (incY) 
  {
    this.y += incY;
  }
}

const p2 ={
  x:3,
  y:0,
  moveOnX (incX) 
  {
    this.x += incX;
  },
  moveOnY (incY) 
  {
    this.y += incY;
  }
}

/* ---------------------------------------------------------------------------------------------------Declaracion manual de objetos------------------------------------------------------------ */




/* -----------------------------------------------------------------------------------------------Clases (Sintaxis sugar)--------------------------------------------------------------------- */

/* Funcionan igual que los prototipos. Tienen sus mismas caracteristicas,
solo es una manera mas sencilla de escribirlos. */
class Algo
{
  constructor (x,y)
  {
    this._x = x;
    this._y = y;
  }

  get x ()
  {
    return this._x;
  }

  get y ()
  {
    return this._y;
  }

  moveOnX (incX)
  {
    this._x += incX;
  }

  moveOnY (incY)
  {
    this._y += incY;
  }

  distancia (p)
  {
    return Math.sqrt( Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2) ).toFixed(2);
  }
}


class Punto 
{
  constructor (x,y)
  {
    this._x = x;
    this._y = y;
  }

  get x ()
  {
    return this._x;
  }

  get y ()
  {
    return this._y;
  }

  moveOnX (incX)
  {
    this._x += incX;
  }

  moveOnY (incY)
  {
    this._y += incY;
  }

  distancia (p)
  {
    return Math.sqrt( Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2) ).toFixed(2);
  }

}

const p1 = new Punto(0,4);
const p2 = new Punto(3,0);

const p3 = new Algo(5,7);

p1.distancia(p2);
p2.distancia({x: 20, y: -7});

/* -----------------------------------------------------------------------------------------------Clases (Sintaxis sugar)--------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------------------------------------------Prototipos-------------------------------------------------------------- */

/* Funcion constructor del prototipo */
function Punto (x, y)
{
  this.x = x;
  this.y = y;
}

/* Las funciones se declaran fuera del constructor para que no sean exclusivas
de la instancia. Es decir, si declaro la funcion moveOnX dentro del constructor
de la siguiente manera: this.moveOnX = function moveOnX (inc) {..}, cada instancia
tendra declarada su propia funcion, y no estaran dentro del prototipo (_proto_).
El que esten dentro de _proto_ nos permite realizar herencia. Ademas todos los
objetos dentro de JS tienen el prototype Object.*/
Punto.prototype.moveOnX = function moveOnX(incX)
{
  this.x += incX;
}

Punto.prototype.moveOnY = function moveOnY(incY)
{
  this.y += incY;
}

Punto.prototype.distancia = function distancia (p)
{
  return Math.sqrt( Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2) ).toFixed(2);
}

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);

p1.distancia(p2);
p2.distancia({x: 20, y: -7});

/* Al sobrescribir el prototype de un obejeto este se modifica para todos
los objetos instancias de este. Es decir, en la linea de abajo se esta 
modificando la funcion moveOnX no solo para p1, sino tambien para p2. */
p1.__proto__.moveOnX = function () {alert( "Hola!")};


/* --------------------------------------------------------------------------------------------------------------------Prototipos-------------------------------------------------------------- */


/* --------------------------------------------------------------------------------Objetos----------------------------------------------------------------------------------------------------- */

const Punto =
{
  /* Funcion constructor del objeto. Se puede llamar como sea. */
  init: function (x, y)
  {
    this._x = x;
    this._y = y;
  },
  moveOnX: function moveOnX(incX)
  {
    this._x = incX;
  },
  moveOnY: function moveOnY(incY)
  {
    this._y = incY;
  },
  distancia: function distancia(p)
  {
    return Math.sqrt( Math.pow(this._x - p._x, 2) + Math.pow(this._y - p._y, 2) ).toFixed(2);
  }
}

/* Para crear la nueva instancia del objeto se debe crear con Object.crete y
pasar como parametro el nombre de la delcaracion del objeto. Despues se debe
ejecutar la funcion constructor. */
const p1 = Object.create(Punto);
const p2 = Object.create(Punto);

p1.init(0, 4);
p2.init(3, 0);

p1.distancia(p2);
p2.distancia({x: 20, y: -7});

/* --------------------------------------------------------------------------------Objetos----------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------var y let----------------------------------------------------------------------------------------------------- */

/* Si declaramos una variable si var, let o const, se asigna al scope global que en el navegador se llama window. Es algo que se debe evitar a toda costa. Hay que reducir al minimo el scope
de las variables. */
nombre = "Daniel"
console.log(window.nombre)


/* La diferencia de usar let y var, es que var sube el escope de la variable a la raiz de la funcion donde se esta declarando.
Por eso es preferible usar siempre let y no var. */
function saliuda(){
  for (let i=0; i<10; i++)
  {
    console.log("Hola");
  }
  console.log(i); /* Undifined */
}

/* --------------------------------------------------------------------------------var y let----------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------Funciones con n parametros y funciones sobre arrays----------------------------------------------------------------------------------------------------- */

/* function suma(...numeros)
{
  return numeros.reduce((acum, numero) => 
  {
    acum += numero
    return acum
  },0)
} */


/* Misma funcion, pero reducida a const y suando arrow functions */
const suma = (...numeros) => numeros.reduce( (acum, numero) => acum += numero )

/* Reduce es una funcion de todos los elementos array. Recibe una function cond dos parametros. El valor acumulado del recorrido del arreglo, 
y valor del elemento actual del recorrido del arreglo. */

suma(4,10,83,23,62)

/* function dobles (...numeros)
{
  return numeros.map( (numero) => 
  {
    numero * 2
  })
} */

/* Misma funcion, pero reducida a const y suando arrow functions */
const dobles = (...numeros) => numeros.map( numero => numero * 2)
dobles (3,5,10)
/* Map es una funcion de los array que permite realizar una accion sobre cada elemento del array sin modificarlo el array original. map siempre retorna 
un array de la misma longitud del array original*/


const imprimir = (...numeros) => numeros.forEach( numero => console.log(numero))
imprimir (3,5,10)
/* Foreach es una funcion que tienen los array que permite ejecutar alguna accion con cada elemento del array sin modificar el valor original.
A diferencia de map, foreach no retorna otro array. */

const pares = (...numeros ) => numeros.filter (numero => numero % 2 == 0 )
pares (3,6,12,35,67,82)
/* filter es una funcion de los array que nos permite filtrar los elementos del mismo. Recibe una funcion que se ejecuta sobre cada elemento del arreglo y devuelve true o false. 
Este valor true o false, determina si el elemento es consercado dentro del arreglo o no. LA funcion filter no modifica el arreglo original, solo devuelve una copia del mismo,
sin los elemntos filtrados. */

/* --------------------------------------------------------------------------------Funciones con n parametros y funciones sobre arrays----------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------Closures----------------------------------------------------------------------------------------------------- */

/* Los closures son funciones qu recuerdan el scope de cuando fueron creadas. Ejemplos abajo */


/* Al invcar la funcion saluarFamilia, esta regresa una funcion, que
recuerda el valor que de apellido que se recibio durante su invocacion */
const saludarFamilia = apellido => nombre => `Hola ${nombre} ${apellido}`

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Luis")
saludarGomez("Juan")

saludarPerez("Pedro")
saludarPerez("Ana")

const generarPrefijo = prefijo => palabra => `${prefijo}${palabra}`

const prefijoRe = generarPrefijo("re")
const prefijoIn = generarPrefijo("in")

prefijoRe("malo")
prefijoIn("creible")


/* --------------------------------------------------------------------------------Closures----------------------------------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------------Punto y coma----------------------------------------------------------------------------------------------------- */

/* El ; indica el salto de linea y es opcional en JS, salvo en contados casos donde es necesario para identificar que se trata de una nuvea funcion */

const nombre = "Daniel"

(function saluda()
{
  console.log("Hola")
})()

/* Las funciones invocadas inmediatamente o IIFE, como su nombre lo indica, son funciones que se ejecutan inmediatamente despues de su declaracion y
son un ejemplo donde se debe usar ; al final de la linea anterior */

const num = 2

[
  1,
  4,
  6
].forEach(numero => console.log(numero))

/* Otro ejemplo donde es necesario usar ; al final de la linea anterior es al realziar una operacion a un array anonimo */

/* --------------------------------------------------------------------------------Punto y coma----------------------------------------------------------------------------------------------------- */


/* ------------------------------------------------Callbacks--------------------------------------------------------------- */

/* Pasarle una funcion como parametro o argumento a otra funcion, y que esa funcion se ejecute (de forma sincrona o asincrona), es un callback */

/* Promesas: Son una forma de ejecutar codigo sincrono o asincrono que te devuelve una respuesta si se ejecuto o no */




/* Debug: para debugear el codigo de usa la palabra "debugger" como punto de interrupcion, y al ejecutar el codigo en el navegador con la consola abierta, la ejecucion de este se detendra cuando
llege a ese punto. */

let i =2
while(i > 1){
  debugger
  console.log(`el valor de i sigue siendo ${i}`)
}