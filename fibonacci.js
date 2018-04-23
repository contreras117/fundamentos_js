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

/* Un objeto es un iterador cuando sabe cómo acceder a los elementos de una colección uno a la vez, mientras mantiene un registro de su posición actual en dicha secuencia. 
En JavaScript un iterador es un objeto que tiene un método next() el cual devuelve el siguiente elemento en una secuencia. Este método devuelve un objeto con dos propiedades: 
done y value.*/

const fibonacciIterator = () => {
    let a = 0, b = 1
    
    return {
        next: (reset) => {
            if (reset) a = 0, b = 1
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


/* Generador */

/* Un generador es una funcion que devuelve un valor y al volver a ser llamada continua su ejecuncion en el punto donde se quedo la ultima vez*/

/* Para declarar un generator se debe poner un "*" despues de la palabra function */
function* fibonacciGenerator() {
    let a = 0, b = 1, counter = 0

    
    while (counter < 5){
        let f = a 
        a = b
        b = f + a
        counter++
        /* La parabra reservada "yield" solo puede ser usada dentro de los generadores y al igual que return devuelve un objeto, pero ademas cuando vuelve a ser llamado el metodo next, 
        el codigo continua su ejecucion en ese punto. Ademas permite resivir parametro dentro de la funcion next y asignarlos a otras variables. */
        /* La palabra yield al igual que los iteradores devuelve un objeto con dos propiedades, value y done. Mientras el codigo dentro de la funcion* aun no haya termiando, done sera false.
        Mientras que value es el objeto despues de la palabra yield */
        let reset = yield f;
        if (reset) a=0, b=1
    }
}

fibo = fibonacciGenerator()

fibo.next() //0
fibo.next() //1
fibo.next() //1
fibo.next() //2
fibo.next() //3
fibo.next() //Done: true, por que ya se generaron cinco valores y el ciclo while termino


fibo.next(true)//0
fibo.next() //1
fibo.next() //1
fibo.next() //2
fibo.next() //3
fibo.next() //5

