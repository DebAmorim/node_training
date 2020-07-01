const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
//permite que eu envie dados para a aplicação no formato de json
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

