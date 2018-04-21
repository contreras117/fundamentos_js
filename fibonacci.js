let contadorRec = 0
const fibonacciRec = num => {
    contadorRec++
    if (num == 1) return 0
    if (num == 2) return 1
    return fibonacciRec(num - 1) + fibonacciRec(num - 2)
}

/* Funcion optimisada que utiliza un objeto para almacenar los valores ya calculados 
de fibonacci y evitar hacer llamadas a la funcion de manera incesaria */
let contadorMemo = 0
const fibonacciMemo = (num, memo = {}) => {
    contadorMemo++
    if (memo[num]) return memo[num]
    if (num == 1) return 0
    if (num == 2) return 1
    return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo)
}

fibonacciRec(20) // La funcion se ejecuta 13259 veces
fibonacciMemo(20) // La funcion se ejecuta 37 veces 




/* Iterador */

/* Manera de hacer que un objeto sea iterable. Es una manera de hacer objetos con elementos infinitos*/

const fibonacciIterator = () => {
    let a = 0, b = 1
    return {
        next: () => {
            let f = a 
            a = b
            b = f + a
            /* [a,b] = [b, a + b] */ /* Manera de ajustar los valores de a y b */
            return { value: f, done: false  }
        }
        
    }
}

fibo = {}
/* Para que culquier objeto sea iterable debe tener asignada la propiedad System.iterator. Ademas la funcion asiganda a esta propiedad debe devolver la funcion next  
la cual a su vez debe devolver las propiedades value y done, la cual indica si el iterador ya termino o continua.*/
fibo[Symbol.iterator] = fibonacciIterator

let i = 0
for (let value of fibo) {
    console.log(value)
    i++
    if (i >= 20) break
}



fibo.next() //0
fibo.next() //1
fibo.next() //1
fibo.next() //2
fibo.next() //3
fibo.next() //5
fibo.next() //8