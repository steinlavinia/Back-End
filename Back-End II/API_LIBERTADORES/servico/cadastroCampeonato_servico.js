import pool from "./conexao.js";

export async function cadastroCampeonato(campeao, vice, ano) {
    const conexao = await pool.getConnection();
    const resposta = await conexao.query('INSERT INTO campeonatos (campeao, vice, ano) VALUES (?, ?, ?)', [campeao, vice, ano]);
    console.log(resposta);
    conexao.release();
} 