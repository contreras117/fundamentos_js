class Dragable{
	
	constructor(element) {
		this.status = false
		this.$box = document.getElementById(element)
		this.top = this.$box.getBoundingClientRect().top
		this.left = this.$box.getBoundingClientRect().left
		/* getBoundingClientRect() regresa un objeto con los valores top, left, right y bottom del objeto sobre el que se invoca. */
		this.events()
	}

	events() {
		this.$box.addEventListener("mousedown", (e) => {
			this.status = true
			this.$box.style.background = "lightgreen"
		})

		document.addEventListener("mouseup", (e) => {
			this.status = false
			this.$box.style.background = "lightblue"
		})

		document.addEventListener("mousemove", (e) => {
			if(this.status){
				this.top += e.movementY
				this.left += e.movementX
				this.$box.style.top = this.top + "px"
				this.$box.style.left = this.left + "px"
			}
		})
	}
}

let caja = new Dragable("box")