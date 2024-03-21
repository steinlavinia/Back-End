//Exercícios Estruturas Condicionais

import dia from 'readline-sync';

let pergunta = dia.questionInt('Digite o numero do dia da semana que deseja: ');

switch (pergunta) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-Feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-Feira');
        break;
    case 5:
        console.log('Quinta-Feira');
        break;
    case 6:
        console.log('Sexta-Feira')
        break;
    case 7:
        console.log('Sádado')
        break;
    default:
        console.log('Esse numero nao corresponde a nenhum dia da semana!')
};

import mes from 'readline-sync';

let mes_ano = mes.questionInt('Digite o numero do mes que deseja: ');

switch (mes_ano) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Setembro')
        break;
    case 10:
        console.log('Outubro')
        break;
    case 11:
        console.log('Novembro')
        break;
    case 12:
        console.log('Dezembro')
        break;
    default:
        console.log('Esse numero não corresponde a nenhum mes!')
};

import calculadora from 'readline-sync';

let n1 = calculadora.questionFloat('Digite o 1 numero: ');
let n2 = calculadora.questionFloat('Digite o 2 numero: ');
let op = calculadora.question('Digite a operacao desejada (+ , -, *, /): ');

switch (op) {
    case '+':
        console.log(n1 + n2.toFixed(2));
        break;
    case '-':
        console.log(n1 - n2.toFixed(2));
        break;
    case '*':
        console.log(n1 * n2.toFixed(2));
        break;
    case '/':
        console.log(n1 / n2.toFixed(2));
        break;
};

import aumento from 'readline-sync';

let salario = aumento.questionFloat('Digite seu salario: ');
let bonificacao = aumento.question('Digite sua bonificacao (A, B, C ou D): ');

switch (bonificacao) {
    case 'A':
        console.log(5 / salario * 100);
        break;
    case 'B':
        console.log(10 / salario * 100);
        break;
    case 'C':
        console.log(15 / salario * 100);
        break;
    case 'D':
        console.log(20 / salario * 100);
        break;
};