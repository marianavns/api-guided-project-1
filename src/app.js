const express = require('express')
const app = express()
const routes = require('../src/router/routerGames')

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname})
});

app.use('/jogos', routes)

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
});

module.exports = app
