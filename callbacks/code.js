const DESPERTAR = 3000
const VESTIRSE = 2000
const DESAYUNAR = 5000
const CONDUCIR = 2000
const TRABAJAR = 10000

const $agenda = document.getElementById("agenda")

setTimeout(() => {
  $agenda.textContent = "Ahora me estoy vistiendo..."
  setTimeout(() => {
    $agenda.textContent = "Ahora estoy desayunando..."
    setTimeout(() => {
      $agenda.textContent = "Ahora estoy conduciendo al trabajo..."
      setTimeout(() => {
        $agenda.textContent = "Ahora estoy trabajando..."
        setTimeout(() => {
          $agenda.textContent = "Ya me voy al GYM!!!"
        }, TRABAJAR);
      }, CONDUCIR);
    }, DESAYUNAR);
  }, VESTIRSE);
}, DESPERTAR);