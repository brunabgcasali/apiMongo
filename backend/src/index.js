require("dotenv").config(); 

const app = require("./app");
const Loaders = require("./loaders/index");

async function startServer() {
  try {
    await Loaders.start(); 

    app.listen(3333, () => {
      console.log("Servidor rodando corretamente ^^");
    });

  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }
}

startServer();
