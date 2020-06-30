const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir("./src/models");
// require sem a biblioteca require-dir 
// require('./src/models/product');

//pra testar se o model está funcionando:
// const product = mongoose.model('Product');

//Rotas
app.use("/api", require("./src/routes"));


app.listen(3001);

