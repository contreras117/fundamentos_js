class Dragable{
	
	constructor(element) {
		this.status = false
		this.$box = document.getElementById(element)
		this.events()
	}

	events() {
		this.$box.addEventListener("mousedown", (e) => {
			this.status = true
			console.log(e)
		})

		document.addEventListener("mouseup", (e) => {
			this.status = false
			console.log(e)
		})

		document.addEventListener("mousemove", (e) => {
			if(this.status){
				console.log(e)
			}
		})
	}
}

new Dragable("box")