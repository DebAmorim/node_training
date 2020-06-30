const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    // product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });
    
    return res.send('Hello, Deb!')
});

module.exports = routes;