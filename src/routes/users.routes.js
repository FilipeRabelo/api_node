  // Todas as ROTAs Dos USUARIOs
  // UserROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router
  // desestruturando express e importando as Router

  // importação - trazendo o Router de dentro do express
  const { Router } = require("express");

  // importando o CONTROLLER
  const UsersController           = require("../controllers/UsersController");

  // aqui esta as rotas // INICIALIZANDO O Router
  const usersRoutes= Router();

  // fazendo uma new - nova instacia
  const usersController = new UsersController();

  // rota - funcao para criar (create) um usuario criando users - chamando o crete de dentro do controller
  usersRoutes.post("/", usersController.create);





  // EXPORTANDO esse arquivo para o server
  module.exports = usersRoutes;