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

  // NA RAIZ VAI SER CHAMADO O USERSCONTROLLER E DENTRO DO CONTROLER TEMOS O METODO CREATE
  usersRoutes.post("/", usersController.create);



  // EXPORTANDO esse arquivo para o server
  module.exports = usersRoutes;