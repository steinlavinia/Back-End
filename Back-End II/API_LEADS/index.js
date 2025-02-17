import express from 'express';
import cors from 'cors';

import { cadastroLeads } from "./scr/servico/cadastro_servico.js";

const app = express();

app.use(cors());
app.use(express.json());