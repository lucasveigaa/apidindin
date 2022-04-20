const express = require('express')
const routes = express.Router()
const CursoController = require('../controllers/cursos.controller')

routes.post('/cursos', CursoController.cadastrarCurso)
routes.get('/cursos/lista', CursoController.listarCursos)
routes.delete('/cursos/:titulo/deletar', CursoController.deletarCursos)

module.exports = routes
