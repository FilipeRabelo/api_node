
  // missao do index.js é reuniar todas as rotas da aplicação q estao separadas por arquivos

  // ROTA - toda vez q acessar o users, vai ser redirecionado para usersRouter que é o grupo de rotas do usuario
  // routes CONTEM todas as rotas da aplicação - usersROtas - grupo de rotas do usuario

  // importando e desestruturando o Router do express
  const { Router } = require("express");

  // importando o usersRouter do "./users.routes" - grupo de rotas do usuario
  const usersRoutes= require("./users.routes");

  // colocando a funcao dentro da variavel e criando a rota
  const routes= Router();

  // usando a nova rota - Redirecionando para a rota do usuario - USERS.ROUTES.JS
  routes.use("/users", usersRoutes);

  // EXPORTANDO ROUTES - ROTAS DO USUARIO - U
  module.exports = routes;