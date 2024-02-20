  // Todas as ROTAs Dos USUARIOs
  // UserROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router
  // desestruturando express e importando as Router

  const { Router }       = require("express");                          // importação - trazendo o Router de dentro do express
  const UsersController  = require("../controllers/UsersController");   // importando o CONTROLLER

  const usersRoutes      = Router();                                    // INICIALIZANDO O Router - aqui esta as rotas //
  const usersController  = new UsersController();                       // fazendo uma new - nova instacia

  // NA RAIZ VAI SER CHAMADO O USERSCONTROLLER E DENTRO DO CONTROLER TEMOS O METODO CREATE
  usersRoutes.post("/", usersController.create);

  module.exports = usersRoutes;

  let nome = "Filipe"

  console.log(nome);