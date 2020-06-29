const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

//Rotas
app.get('/', (req, res) => {
    res.send('Hello, Deb!')
});


app.listen(3001);

