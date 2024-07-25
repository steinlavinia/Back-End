// Funções

   // ? se for verdadeiro
   // : ou

let fatorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(fatorial(3));

// Exercícios 

import rl from 'readline-sync';

function caixaAlta(string) {
    return string.toUpperCase();
};

let nome = rl.question('Digite seu nome: ');
console.log(`SEU NOME É ${caixaAlta(nome)}`);

function parImpar(number) {
    if (number / 2 == 0) {
        console.log('Par')
    }
}