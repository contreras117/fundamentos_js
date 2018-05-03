const NIVELES = 15
const TIMEOUT = 1000



const siguienteNivel = nivelActual => {

	if(nivelActual == NIVELES){
		return alert('Ganaste. Eres el mejor!!!')
	}

	alert(`Nivel ${nivelActual}`)

	const teclas = generarTeclas(nivelActual)
	for (let i = 0; i < nivelActual; i++){
		setTimeout(() => activate(teclas[i]), TIMEOUT * i); 
	}

	let i = 0
	window.addEventListener('keydown', onKeyDown)

	function onKeyDown(ev){
		if(teclas[i] == ev.keyCode){
			activate(ev.keyCode, {success: true})
			i++
			if(i == nivelActual){
				window.removeEventListener('keydown',onKeyDown)
				setTimeout(() => siguienteNivel(nivelActual+1), TIMEOUT);
			}
		}
		else{
			activate(ev.keyCode, {fail: true})
			window.removeEventListener('keydown',onKeyDown)
			
		}
	}
}

const generarTeclas = num => {
	return new Array(num).fill(0).map(generarTeclaAleatoria)
}

const generarTeclaAleatoria = () => {
	const MIN = 65
	const MAX = 90
	return Math.round(Math.random() * (MAX - MIN) + MIN)
}

const activate = (teclaActual, opts = {}) => {
	const el = getElementByKeyCode(teclaActual)
	el.classList.add('active')
	if(opts.success){
		console.log(`Clase agregada`)
		el.classList.add('success')
	} else if (opts.fail){
		el.classList.add('fail')
		alert("Perdiste. Imbecil!!!")
	}
	setTimeout(() => deactivate(el), TIMEOUT);
}

const deactivate = el => {
	el.className = 'key'
}

const getElementByKeyCode = keyCode => {
	return document.querySelector(`[data-key="${keyCode}"]`)
}

siguienteNivel(5)