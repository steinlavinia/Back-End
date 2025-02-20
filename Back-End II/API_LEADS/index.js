import express from 'express';
import cors from 'cors';

import { validaUsuario } from "./scr/validacao";

import { cadastroLeads } from "./scr/servico/cadastro_servico.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req,res) => {
    const {nome, email, telefone} = req.body;

    const usuarioValido = usuarioValido(nome, email, telefone);
    if (usuarioValido.status) {
        await cadastroUsuario(nome, email, telefone);
        res.status(204).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }
});