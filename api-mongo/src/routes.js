const { Router } = require('express');

const ProductController = require('./Controllers/ProductController');
const UsuarioController = require('./Controllers/UsuarioController');
const CursoController = require('./Controllers/CursoController');
const JornadaController = require('./Controllers/JornadaController');
const TarefaController = require('./Controllers/TarefaController');
const AuthController = require('./Controllers/AuthController');
const AuthMiddleware = require('./Middlewares/AuthMiddleware');
const TopicoController = require("./Controllers/TopicoController");
const ProgressoController = require("./Controllers/ProgressoController");

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

routes.get("/jornada", JornadaController.findAll);
routes.get("/jornada/:id", AuthMiddleware, JornadaController.findById);
routes.post("/jornada", AuthMiddleware, JornadaController.create);
routes.put("/jornada/:id", AuthMiddleware, JornadaController.update);
routes.delete("/jornada/:id", AuthMiddleware, JornadaController.delete);

routes.post('/tarefa', TarefaController.create);
routes.get('/tarefa', TarefaController.findAll);
routes.get('/tarefa/:id', TarefaController.findById);
routes.put('/tarefa/:id', TarefaController.update);
routes.delete('/tarefa/:id', TarefaController.delete);
routes.post("/tarefa/completa", TarefaController.createComplete);



routes.post('/login', AuthController.login);
routes.get('/perfil', AuthMiddleware, (req, res) => {
  return res.json({
    message: "Rota protegida acessada",
    userId: req.userId
  });
});

routes.post("/topico", TopicoController.create);
routes.get("/topico", TopicoController.findAll);
routes.get("/topico/:id", TopicoController.findById);
routes.get("/topico/curso/:cursoId", TopicoController.findByCurso);
routes.put("/topico/:id", TopicoController.update);
routes.delete("/topico/:id", TopicoController.delete);
routes.post("/topico/lote", TopicoController.createMany);

routes.get(
  "/progresso",
  AuthMiddleware,
  ProgressoController.progressoInicial
);

routes.post(
  "/progresso/responder/:tarefaId",
  AuthMiddleware,
  ProgressoController.responderQuestao
);

routes.get(
  "/progresso/:tarefaId",
  AuthMiddleware,
  ProgressoController.buscarProgresso
);

//routes.post(
//  "/progresso/finalizar/:tarefaId",
//  AuthMiddleware,
//  ProgressoController.finalizarTarefa
//);

module.exports = routes;