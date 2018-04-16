
let decSeg = 0
let seg = 0
let min = 0
let hour = 0

const timer = document.getElementById("timer")

setInterval( () => {
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
	timer.textContent = `${hour}:${min}:${seg}.${decSeg}`

}, 100)