import historicoInflacao from "../dados/dados.js"

export const buscarIpca = () => {
    return historicoInflacao;
};

export const buscarIpcaPorId = (id) => {
    const idIpca = parseInt(id);
    return historicoInflacao.find(ipca => ipca.id === idIpca);
};

export const buscarIpcaPorAno = (anoIpca) => {
    return historicoInflacao.filter(ipca => ipca.ano == anoIpca);
};

export const calcular = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    let historicoFiltrado = historicoInflacao.filter(
        historico => {
            if (anoInicial === anoFinal) {
                return ipca.ano === anoInicial && ipca.mes >= mesInicial && ipca.mes <= mesFinal;
            } else {
                return (
                    (ipca.ano === anoInicial && ipca.mes >= mesInicial) ||
                    (ipca.ano > anoInicial && ipca.ano < anoFinal) ||
                    (ipca.ano === anoFinal && ipca.mes <= mesFinal)
                );
            }
        }
    )

    let taxasMensais = 1;
    
    for (const elemento of historicoInflacao) {
        taxasMensais *= (elemento.ipca / 100) + 1;
    }

    const resultado = valor * taxasMensais;
    return parseFloat(resultado.toFixed(2));
};