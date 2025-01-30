const express = require('express');
const vendaFrutas = require('./frutas/frutas.js');

const app = express();

app.get('/frutas', (req, res) => {
    res.json(vendaFrutas.vendaFrutas);
});

app.get('/frutas/:iduf', (req, res) => { 
    const idFrutas = parseInt(req.params.idfrutas);
    let mensagemErro = '';
    let nomeFrutas;

    if (!(isNaN(idFrutas))) {
        nomeFrutas = vendaFrutas.vendaFrutas.find(u => u.id === idFrutas); 
        if (!nomeFrutas) {
            mensagemErro = 'Fruta indisponível!';
        }
    } else {
        mensagemErro = 'Requisição inválida!';
    }
    
    if (nomeFrutas) {
        res.json(nomeFrutas); 
    } else {
        res.status(404).json({'erro': mensagemErro})
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});