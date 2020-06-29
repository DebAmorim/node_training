const express = require('express');

//o express é um micro-framework para auxiliar na tratativa de rotas
//e views (não utilizadas aqui por ser uma API REST, mas são as formas de visualização)
const app = express();

//diz para a aplicação ouvir a porta 3001 do navegador
app.listen(3001);