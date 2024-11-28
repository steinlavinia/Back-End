import express from 'express';
import { buscarIpca, buscarIpcaPorId, buscarIpcaPorAno, calcular } from './servicos/servico.js';
import historicoInflacao from './dados/dados.js';

const app = express();

app.get('historicoIPCA/:calculo', (req, res) => {
  const valor = parseFloat(req.query.valor);
  const mesInicial = parseInt(req.query.mesInicial); 
  const anoInicial = parseInt(req.query.anoInicial);
  const mesFinal = parseInt(req.query.mesFinal);
  const anoFinal = parseInt(req.query.anoFinal);

  if (validacaoErro(valor, mesInicial, anoInicial, mesFinal, anoFinal)) {
    res.status(400).json({ erro: 'Parâmetros Inválidos' });
    return;
  }

  const resultado = calcular(valor, mesInicial, anoInicial, mesFinal, anoFinal);
  res.json({ resultado: resultado})
});

app.get('/historicoIPCA', (req, res) => {
  const anoIpca = req.query.ano;
  const resultado = anoIpca ? buscarIpcaPorAno(anoIpca) : buscarIpca();
  if (resultado) {
    res.json(resultado);
  } else {
    res.status(404).send({ "erro": "Nenhum histórico encontrado para o ano especificado" });
  }
});

app.get('/historicoIPCA/:idIpca', (req, res) => {
  const ipca = buscarIpcaPorId(req.params.idIpca);
  if (ipca) {
    res.json(ipca);
  } else {
    res.status(404).send({ "erro": "Elemento não encontrado" });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});