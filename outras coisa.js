// comparação de numeros
function comparar(num1,num2) {
    if (num1 > num2){
    console.log(num1,"será maior que o",num2)
    return "o primeiro numero será maior que o segundo"
    }

    else if (num1 < num2){
    console.log(num1,"será menor que o",num2)
    return "o numero um será menor que o segundo numero"
   }
   if (num1 === num2){
    console.log(num1,"será igual a o",num2)
    return "o numero um será igual a o segundo numero"
   }
    
}

comparar(6666666,2900)