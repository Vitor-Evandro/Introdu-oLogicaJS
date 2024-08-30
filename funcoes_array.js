

// funções do array

function PrimeiroeUltimoDivididoPorDois(numeros){

const primeiro = numeros[0]/2
const ultimo = numeros[numeros.length-1 ]/2.

return [ultimo,primeiro]

}

//usando a função
const numeros = [200,789,456,10134,100000000000000000000]
const resultado = PrimeiroeUltimoDivididoPorDois (numeros)
console.log(resultado)