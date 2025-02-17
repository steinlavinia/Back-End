import express from 'express';
import cors from 'cors';

import { cadastroLeads } from "./scr/servico/cadastro_servico.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req,res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    await cadastroLeads(nome, email, telefone);

    res.status(204).send({'Mensagem': 'Cadastro efetivado com sucesso!'});
});