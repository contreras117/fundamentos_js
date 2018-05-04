const NIVELES = 15
const ASCII_A = 65
const ASCII_Z = 90
const TIMEOUT = 500
const $START = document.getElementById("start")
let teclas

$START.addEventListener("click", () => { 
	play()
})

function siguienteNivel (nivelActual) {

	$START.classList.add("hidden")
	$START.disabled = "true"
	if(nivelActual > NIVELES){
		return swal({
			title: `Ganaste`,
			text: `¿Quieres jugar de nuevo?`,
			icon: `success`,
			buttons: ["No gracias", "Claro!"]
		})
		.then(repeat => {
			if(repeat){
				play()
			}
			else
			{
				swal({
					title: `Adios`,
					text: `Que lastima!!!`,
					icon: `error`
				})
			}
		})
	}

	swal({
		title: `Nivel ${nivelActual} / ${NIVELES}`,
		icon: `info`,
		buttons: false,
		timer: 1000

	})
	.then(()=>{
		for (let i = 0; i < nivelActual; i++){
			console.log("")
			setTimeout(() => {
				 activate(teclas[i])
				 setTimeout(() => deactivate(teclas[i]), TIMEOUT);
			}, TIMEOUT * 2 * i + TIMEOUT)
		}
	
		let i = 0
		window.addEventListener('keydown', onKeyDown)
		window.addEventListener('keyup',onKeyUp)
	
			
		function onKeyDown(ev){
			if(isLetterKey(ev.keyCode)){
				if(teclas[i] == ev.keyCode){
					activate(ev.keyCode, {success: true})
				}
				else{
					activate(ev.keyCode, {fail: true})
				}
				window.removeEventListener('keydown',onKeyDown)
			}
		}
	
		function onKeyUp(ev){
			if(isLetterKey(ev.keyCode)){
				if(teclas[i] == ev.keyCode){
					deactivate(ev.keyCode)
					i++
					if(i == nivelActual){
						window.removeEventListener('keyup',onKeyUp)
						siguienteNivel(nivelActual+1)
					}
					else window.addEventListener('keydown', onKeyDown)
				}
				else{
					deactivate(ev.keyCode)
					window.removeEventListener('keyup',onKeyUp)
					$START.classList.remove("hidden")
					$START.disabled = "false"
					return swal({
						title: `Perdiste`,
						text: `¿Quieres jugar de nuevo?`,
						icon: `error`,
						buttons: ["No gracias", "Claro!"]
					})
					.then(repeat => {
						if(repeat){
							play()
						}
						else
						{
							swal({
								title: `Adios`,
								text: `Que lastima!!!`,
								icon: `error`
							})
						}
					})
				}
			}
		}
	})

}

function isLetterKey(key){
	return key >= ASCII_A && key <= ASCII_Z
}

function generarTeclas (num) {
	return new Array(num).fill(0).map(generarTeclaAleatoria)
}

function generarTeclaAleatoria(){
	return Math.round(Math.random() * (ASCII_Z - ASCII_A) + ASCII_A)
}

function activate (key, opts = {}) {
	const el = getElementByKeyCode(key)
	el.classList.add('active')
	if(opts.success){
		el.classList.add('success')
	} else if (opts.fail){
		el.classList.add('fail')
	}
}

function deactivate (key){
	const el = getElementByKeyCode(key)
	el.className = 'key'
}

function getElementByKeyCode (keyCode) {
	return document.querySelector(`[data-key="${keyCode}"]`)
} 

function play() {
	teclas = generarTeclas(NIVELES)
	siguienteNivel(1)
}