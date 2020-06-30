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
const product = mongoose.model('Product');

//Rotas
app.get('/', (req, res) => {
    product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    
    return res.send('Hello, Deb!')
});


app.listen(3001);

