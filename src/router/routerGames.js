const express = require('express')
const router = express.Router()
const controller = require('../controller/gamesController')

router.get('/', controller.getAll)
router.get('/nomes', controller.getAllNames)
router.get('/:id', controller.getByID)
router.get('/pesquisa/:genre', controller.getByGenre)

module.exports = router
