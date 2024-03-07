let apartamento = {
    quartos: 3,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456 - Centro.",
    andar: 7
};

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`);

let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,
};

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}kg, está à venda por R$${produtoEmbalado.preco}.`);

class Imovel {
    quartos;
    tipo;
    endereco;

    exibirInformacoes() {
        return(`Quartos: ${Imovel.quartos}. \n Tipo: ${Imovel.tipo}. \n Endereço: ${Imovel.endereco}.`)
    }
}

const Casa = new Imovel;
Quartos: 4
Tipo: "Casa"
Endereço: "Rua da Amizade, 789 - Bairro Alegre"