
//


function podeEstudar(ConcluiuEsinoMédio,idade,CursandoOutraFaculdade){
return ConcluiuEsinoMédio &&idade>18 &&!CursandoOutraFaculdade}

// dados necessários para textar a função
let ConcluiuEsinoMédio = true //sim ele fez //não ele não fez
let idade = 9000 //defindo a idade do estudante
let  CursandoOutraFaculdade = false //usando o false ele não esta em outra faculdade

// verificar se ele pode ou não entrar
let resultado = podeEstudar(ConcluiuEsinoMédio,idade,CursandoOutraFaculdade)

//mostrando se ele vai poder ou não entrar na faculdade
if(resultado){
    console.log("você pode entrar na faculdade seu tabacudo   ")
}else{
    console.log("você não pode entrar na faculdade seu imundo")
}
