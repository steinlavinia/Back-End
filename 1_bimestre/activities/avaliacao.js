//Lavínia Stein Schmoller e Nathan Teixeira Lopes.

import rl from 'readline-sync';

let menu = rl.questionInt('|1- Retangulo| |2-Triangulo| |3-Circulo| |4-Sair|\nDigite a opcao que deseja:');

let retangulo = function (largura, altura) {
    let area = largura * altura;
    return area;
};
let triangulo = function (base2, altura2) {
    area2 = (base2 * altura2) / 2;
    return area2;
};
let circulo = function (raio) {
    area3 = 3.1415 * (raio * raio);
    return area3;
};

switch (menu) {
    case 1:
        let largura = rl.questionFloat('Digite a largura do retangulo: ');
        let altura = rl.questionFloat('Digite a altura do retangulo: ');
        retangulo(largura, altura)
        break;
    case 2:
        let base2 = rl.questionFloat('Digite a base do triangulo: ');
        let altura2 = rl.questionFloat('Digite a altura do triangulo: ');
        console.log(`A area desse triangulo e: ${triangulo}`);
        break;
    case 3:
        let raio = rl.questionFloat('Digite o raio do circulo: ');
        console.log(`A area desse circulo e: ${circulo}`);
        break;
    case 4:
        console.log(`Finalizando`)
        break;
    default:
        console.log("Numero invalido");
        break;
}
console.log(menu)