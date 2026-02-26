const { Router } = require('express');

const ProductController = require('./Controllers/ProductController');
const UsuarioController = require('./Controllers/UsuarioController');
const CursoController = require('./Controllers/CursoController');
//const JornadaController = require('./Controllers/JornadaController');
const TarefaController = require('./Controllers/TarefaController');
const EstatisticaController = require("./Controllers/EstatisticaController");
const ProgressoController = require("./Controllers/ProgressoController");
const AuthController = require('./Controllers/AuthController');
const AuthMiddleware = require('./Middlewares/AuthMiddleware');

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

//router.get("/jornadas", auth, JornadaController.findAll);
//router.get("/jornadas/:id", auth, JornadaController.findById);
//router.get("/jornadas/curso/:cursoId/progresso", auth, JornadaController.buscarComProgresso);
//router.post("/jornadas", auth, JornadaController.create);
//router.put("/jornadas/:id", auth, JornadaController.update);
//router.delete("/jornadas/:id", auth, JornadaController.delete);

routes.post('/tarefa', TarefaController.create);
routes.get('/tarefa', TarefaController.findAll);
routes.get('/tarefa/:id', TarefaController.findById);
routes.put('/tarefa/:id', TarefaController.update);
routes.delete('/tarefa/:id', TarefaController.delete);

routes.post("/progresso", ProgressoController.responder);

routes.get("/estatisticas/:jornadaId", EstatisticaController.resumo);

routes.post('/login', AuthController.login);
routes.get('/perfil', AuthMiddleware, (req, res) => {
  return res.json({
    message: "Rota protegida acessada",
    userId: req.userId
  });
});

module.exports = routes;