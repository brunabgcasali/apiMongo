const { Router } = require('express');

const ProductController = require('./Controllers/ProductController');
const UsuarioController = require('./Controllers/UsuarioController');
const CursoController = require('./Controller/CursoController');
const JornadaController = require('./Jornada/JornadaController');
const TarefaController = require('./Tarefa/TarefaController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server está ligado..."});
});

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.post('/usuario', UsuarioController.create);
routes.get('/usuario', UsuarioController.findAll);
routes.get('/usuario/:id', UsuarioController.findById);
routes.put('/usuario/:id', UsuarioController.update);
routes.delete('/usuario/:id', UsuarioController.delete);

routes.post('/curso', CursoController.create);
routes.get('/curso', CursoController.findAll);
routes.get('/curso/:id', CursoController.findById);
routes.put('/curso/:id', CursoController.update);
routes.delete('/curso/:id', CursoController.delete);

routes.post('/jornada', JornadaController.create);
routes.get('/jornada', JornadaController.findAll);
routes.get('/jornada/:id', JornadaController.findById);
routes.put('/jornada/:id', JornadaController.update);
routes.delete('/jornada/:id', JornadaController.delete);

routes.post('/tarefa', TarefaController.create);
routes.get('/tarefa', TarefaController.findAll);
routes.get('/tarefa/:id', TarefaController.findById);
routes.put('/tarefa/:id', TarefaController.update);
routes.delete('/tarefa/:id', TarefaController.delete);


module.exports = routes;