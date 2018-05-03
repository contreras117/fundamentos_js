let string = "";

class Key {
	constructor(id){
		this.$key = document.getElementById(id)
		this.events()
	}
	events(){
		this.$key.addEventListener("mousedown", ()=> {
			this.$key.classList.add("clicked")
		})
		this.$key.addEventListener("mouseup", ()=> {
			this.$key.classList.remove("clicked")
			string += this.$key.id
		})
	}
}

const Q = new Key("q")
const W = new Key("w")
const E = new Key("e")
const R = new Key("r")
const T = new Key("t")
const Y = new Key("y")
const U = new Key("u")
const I = new Key("i")
const O = new Key("o")
const P = new Key("p")
const A = new Key("a")
const S = new Key("s")
const D = new Key("d")
const F = new Key("f")
const G = new Key("g")
const H = new Key("h")
const J = new Key("j")
const K = new Key("k")
const L = new Key("l")
const Z = new Key("z")
const X = new Key("x")
const C = new Key("c")
const V = new Key("v")
const B = new Key("b")
const N = new Key("n")
const M = new Key("m")


document.addEventListener("keydown",(e)=> {
	const key = document.getElementById(e.key)
	if(key != null){
		key.classList.add("clicked")
	}
})

document.addEventListener("keyup",(e)=> {
	const key = document.getElementById(e.key)
	if(key != null){
		key.classList.remove("clicked")
		string += e.key
		console.log(string)
	}
})