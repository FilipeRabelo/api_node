
  // missao do index.js é reuniar todas as rotas da aplicação q estao separadas por arquivos
  // ROTA - toda vez q acessar o users, vai ser redirecionado para usersRouter que é o grupo de rotas do usuario
  // routes CONTEM todas as rotas da aplicação - usersROtas - grupo de rotas do usuario

  const { Router }  = require("express");         // importando e desestruturando o Router do express
  const usersRoutes = require("./users.routes");  // importando o usersRouter do "./users.routes" - grupo de rotas do usuario
  const routes      = Router();                   // colocando a funcao dentro da variavel e criando a rota

  routes.use("/users", usersRoutes);    // usando a nova rota - Redirecionando para a rota do usuario - USERS.ROUTES.JS

  module.exports = routes;              // EXPORTANDO ROUTES - ROTAS DO USUARIO - U