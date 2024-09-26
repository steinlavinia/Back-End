//Exercícios Operadores e Variáveis

let nome1 = "Lavínia";
let idade1 = 15;
console.log("Olá, meu nome é", nome1, "e eu tenho", idade1, "anos.");

let nome2 = "Lavínia";
console.log(nome2.toUpperCase());

let valor = 15;
console.log(typeof valor);

let altura = 1.70;
let peso = 60;
let imc = (peso / (altura * altura));
console.log(imc.toFixed(2));

let num_01 = 10;
let num_02 = 5;

console.log("Soma:", num_01 + num_02);
console.log("Subtração:", num_01 - num_02);
console.log("Multiplicação:", num_01 * num_02); 
console.log("Divisão:", num_01 / num_02);

let idade_01 = 15;
let idade_02 = 13;
console.log(idade_01 > idade_02);

let idade = 15;
if (idade >= 18) {
    console.log("Maior de idade.")
}

else {
    console.log("Menor de idade.")
};

let num = 10;
if (num % 2 == 0) {
    console.log("Par.")
}

else {
    console.log("Ímpar.")
};
