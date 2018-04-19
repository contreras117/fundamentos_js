const DESPERTAR = 3000
const VESTIRSE = 2000
const DESAYUNAR = 5000
const CONDUCIR = 2000
const TRABAJAR = 10000
const $agenda = document.getElementById("agenda")

/* const despertar = new Promise( (todo salio bien, todo salio mal) => {}) */

const despertar = new Promise ( (resolve, reject ) => {
  setTimeout( () => {
    /* resolve('Ahora me estoy vistiendo...') */ /* Funcion que provoca la ejecucion del then() de la promesa */
    reject("Todo valio verga")  /* Funcion que provoca la ejecucion el catch() de la promesa */
  }, DESPERTAR)
})

/* despertar.then(que hacer si todo salio bien)
despertar.catch(que hacer si todo salio mal) */

.then((msg)=>{
  console.log(msg)
})
.catch((err)=>{
  console.log(err)
})
