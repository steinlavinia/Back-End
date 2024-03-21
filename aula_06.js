import rl from 'readline-sync';

let num = rl.questionInt('Informe um numero para calcular a Tabuada: ');
let cont = 0;

while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}


const x = '1' + 1 + "1";
console.log(x);


let numAlunos = rl.questionInt("Informe o número de alunos da turma: ");

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

    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);
    contadorAlunos++;
};

let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);