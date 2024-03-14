import rl from 'readline-sync';

let num = rl.questionInt('Informe um numero para calcular a Tabuada: ');
let cont = 0;

while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}