const express = require('express');

//o express é um micro-framework para auxiliar na tratativa de rotas
//e views (não utilizadas aqui por ser uma API REST, mas são as formas de visualização)
const app = express();

app.get('/', (req, res) => {
    //req: requisição feita ao servidor acessando essa url.
    //Contém todos os parâmetros da requisição:
    //parâmetros, corpo da requisição, cabeçalho, usuário, autenticação, ip

    //res: resposta dada à requisição. Pode ser qualquer valor
    res.send('Hello, Débora!')
});

//diz para a aplicação ouvir a porta 3001 do navegador
app.listen(3001);