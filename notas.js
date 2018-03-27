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