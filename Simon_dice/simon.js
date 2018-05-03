const NIVELES = 15
const ASCII_A = 65
const ASCII_Z = 90
const TIMEIN = 500
const TIMEOUT = 500
const $START = document.getElementById("start")

$START.addEventListener("click", () => { 
	siguienteNivel(1)
})

const siguienteNivel = nivelActual => {

	$START.classList.add("hidden")
	if(nivelActual == NIVELES){
		return alert('Ganaste. Eres el mejor!!!')
	}

	alert(`Nivel ${nivelActual}`)

	const teclas = generarTeclas(nivelActual)
	for (let i = 0; i < nivelActual; i++){
		setTimeout(() => {
			 activate(teclas[i])
			 setTimeout(() => deactivate(teclas[i]), TIMEOUT);
		}, (TIMEIN + TIMEOUT) * i);
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
				return alert("Perdiste Imbecil!!")
			}
		}
	}
}

const isLetterKey = key =>{
	return key >= ASCII_A && key <= ASCII_Z
}

const generarTeclas = num => {
	return new Array(num).fill(0).map(generarTeclaAleatoria)
}

const generarTeclaAleatoria = () => {
	return Math.round(Math.random() * (ASCII_Z - ASCII_A) + ASCII_A)
}

const activate = (key, opts = {}) => {
	const el = getElementByKeyCode(key)
	el.classList.add('active')
	if(opts.success){
		el.classList.add('success')
	} else if (opts.fail){
		el.classList.add('fail')
	}
}

const deactivate = key => {
	const el = getElementByKeyCode(key)
	el.className = 'key'
}

const getElementByKeyCode = keyCode => {
	return document.querySelector(`[data-key="${keyCode}"]`)
}

