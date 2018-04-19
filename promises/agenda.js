const DESPERTAR = 3000
const VESTIRSE = 2000
const DESAYUNAR = 5000
const CONDUCIR = 2000
const TRABAJAR = 10000
const $agenda = document.getElementById("agenda")

const despertar = () => {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora me estoy vistiendo...')
    },DESPERTAR)
  })
}
const vestir = msg => {
  $agenda.textContent = msg
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      reject('No hay comida!!!')
    },VESTIRSE)
  })
}

const desayunar = msg => {
  $agenda.textContent = msg
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora estoy conduciendo al trabajo...')
    },DESAYUNAR)
  })
}

const conducir = msg => {
  $agenda.textContent = msg
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Ahora estoy trabajando...')
    },CONDUCIR)
  })
}

const trabajar = msg => {
  $agenda.textContent = msg
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Ya me voy al GYM!!!...')
    },TRABAJAR)
  })
}

const falsePromise = err => {
  setTimeout(() => {
    $agenda.style.color = "red"
    $agenda.textContent = err
  }, 4000);
}

despertar()
.then(vestir)
.then(desayunar)
.catch(falsePromise)
.then(desayunar)
.then(conducir)
.then( (msg) => {$agenda.textContent = msg})
