const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();
//permite que eu envie dados para a aplicação no formato de json
app.use(express.json());
//dessa forma libera o acesso a todos os domínios
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

