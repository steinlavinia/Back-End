let idade = 15;
if(idade >= 18){
    console.log('Maior de Idade');
}
else{
    console.log('Menor de Idade');
}

if(idade >= 18) console.log('Pode Votar');
(idade >= 18) && ('Pode Votar');

idade >= 18 ? 'Maior de Idade' : 'Menor de Idade';


import ddd from 'readline-sync';

let perg = ddd.questionFloat('Informe o DDD: '); 

switch (perg) {
    case 21:
        console.log('Rio de Janeiro');
        break;
    case 69:
        console.log('Rondônia');
        break;
    case 11:
        console.log('São Paulo');
        break;
    case 65:
        console.log('Mato Grosso');
        break;
    default:
        console.log('DDD inválido!');
        break;
}