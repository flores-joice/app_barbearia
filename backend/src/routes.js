const express = require('express');
const EmpresaController = require('./controllers/EmpresaController');
const ClienteController = require('./controllers/ClienteController');
const AtendimentoController = require('./controllers/AtendimentoController');
const ProfileController = require('./controllers/ProfileController');
const SessionContoller = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionContoller.create)

routes.get('/empresas', EmpresaController.index);
routes.post('/empresas', EmpresaController.create);

routes.get('/profile', ProfileController.index);

routes.get('/clientes', ClienteController.index);
routes.post('/clientes', ClienteController.create);
routes.delete('/clientes/:id', ClienteController.delete)

routes.get('/atendimentos', AtendimentoController.index);
routes.post('/atendimentos', AtendimentoController.create);

module.exports = routes;

// Metodo HTTP:
// GET: Busca/lista informações do back end
// POST: cria informaçoes no back end
// PUT: altera informaçoes no backend
// DELETE:  deleta informações do back end

// Tipos de Parametros:
// Query Params: parametros nomeados enviados na rota após "?" (filtros, paginação)
// Route Params: parametros utilizados para identificar recursos
// Request Body: corpo da requisição, utilizado para criar ou alterar recursos