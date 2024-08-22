import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log(`Olá, ${nome}.`);

let x = entradaDados.questionFloat('X: ');
let y = entradaDados.questionFloat('Y: ');
console.log(`Total: ${x+y}`);

console.log( 20 >= 10 && 2 < 5 );
console.log( 20 + 10 * 2 );
console.log( null + "null" );