const x = '1' + 1 + "1";
console.log(x);

//Exercício While

import rl from 'readline-sync';

let num = rl.questionInt('Informe um numero para calcular a Tabuada: ');
let cont = 0;

while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
};

let numAlunos = rl.questionInt("Informe o numero de alunos da turma: ");

let somaMedias = 0;
let contadorAlunos = 1;

while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

    let somaNotas = 0;
    let contadorBimestres = 1;

    while (contadorBimestres <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas += nota;
        contadorBimestres++;
    };

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;

    console.log(`Media do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);
    contadorAlunos++;
};

let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Media geral da turma: ${mediaGeralTurma.toFixed(2)}`);

//Exercícios Do While

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa;

do {
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100):");

    if (tentativa === numeroAleatorio) {
        console.log("Parabens! Você adivinhou o numero correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um numero maior.");
    } else {
        console.log("Tente um numero menor.");
    }

} while (tentativa !== numeroAleatorio);

//Exercícios For

let anterior = 0;
let atual = 1;

console.log(anterior);
console.log(atual);

for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;
    console.log(proximo);

    anterior = atual;
    atual = proximo;
};

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    };

    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
};

//Exercícios For In e For Of

console.log("\t--- Exercício 01 ---");

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
};


console.log("\n\t--- Exercício 02 ---");
const cores = ["Azul", "Branco", "Amarelo", "Verde", "Vermelho"];

for (let cor of cores) {
    console.log(cor);
};


console.log("\n\t--- Exercício 03 ---")
const string = "JavaScript";

for (let caractere of string) {
    console.log(caractere);
};