


// função segundo grau



function resolverEquacaoSegundGrau(y,x,w){
    // passa 1: calcular o delta
    
     let delta = y*y-4*x*w
   
    // passo 2: verificar se o delta é zero negativo ou positivo

     if (delta<0){

// se odelta for negativo, a equação não tem raizes reais
console.log("A equação não tem raizes reais")

}

     else if (delta===0){

// se o delta for igual a zero a equação tem duas raizes iguais

    console.log("A equação tem raizes iguais. ")

}

else{
    // se o delta for positivo , a equação tem duas raizes diferentes

let x1 = (-y + Math.sqrt(delta))/(2*x)

let x2 = (-y - Math.sqrt(delta))/(2*x)

console.log("A equação tem duas raizes reais: x2=" , x1 , "e x2=" , x2)


}



}

resolverEquacaoSegundGrau(999, -500, 469)