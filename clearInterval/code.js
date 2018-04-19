
let decSeg = 0
let seg = 0
let min = 0
let hour = 0
let running = false
let interval;

const $action = document.getElementById("action")
const $reset = document.getElementById("reset")
const $timer = document.getElementById("timer")

$action.addEventListener("click", () => {
	running = !running
	$action.textContent = running ? "Stop" : "Start"
	if(running){
		interval = setInterval(chronometer,100)
		$reset.classList.add("hide")
	}
	else{
		clearInterval(interval)
		$reset.classList.remove("hide")
	}

})

$reset.addEventListener("click", () => {
	decSeg = 0
	seg = 0
	min = 0
	hour = 0
	$timer.textContent = `${hour}:${min}:${seg}.${decSeg}`
})

const chronometer = () => {
	decSeg++;
	if (decSeg == 10){
		seg++;
		decSeg = 0
	}
	if (seg == 60){
		min++
		seg = 0
	}
	if (min == 60){
		hour++
		min = 0
	}
	$timer.textContent = `${hour}:${min}:${seg}.${decSeg}`
}
