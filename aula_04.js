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
        return(`Quartos: ${this.quartos}. \nTipo: ${this.tipo}. \nEndereço: ${this.endereco}.`)
    };
};

let Casa = new Imovel()
    Casa.quartos = 4
    Casa.tipo = "Casa"
    Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre"

let Apartamento = new Imovel()
    Apartamento.quartos = 2
    Apartamento.tipo = "Apartamento"
    Apartamento.endereco = "Avenida da Paz, 123 - Centro"

console.log(`Casa \n${Casa.exibirInformacoes()}`);
console.log(`Apartamento \n${Apartamento.exibirInformacoes()}`);

class Veiculo {
    marca;
    modelo;
    ano;

    exibirdetalhes() {
        return(`Marca: ${this.quartos}. \nModelo: ${this.tipo}. \nAno: ${this.endereco}.`)
    };
};

let Carro = new Veiculo()
    Carro.marca = "Toyota"
    Carro.modelo = "Corolla"
    Carro.ano = 2022

let Moto = new Imovel()
    Moto.marca = "Honda"
    Moto.modelo = "CBR 600RR"
    Moto.ano = 2021

console.log(`Carro \n${Carro.exibirInformacoes()}`);
console.log(`Moto \n${Moto.exibirInformacoes()}`);