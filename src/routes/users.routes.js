  // Todas as ROTAs Dos USUARIOs
  // UserROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router

  // desestruturando express e importando as Router

  const { Router }      = require("express")                          // importação - trazendo o Router de dentro do express
  const UsersController = require("../controllers/UsersController")   // importando o controller

  const myMiddlewere    = require("../middlewares/users_authentication");
  
  const usersRoutes     = Router();                                   // INICIALIZANDO O Router
  

  // // middleware de autentificação
  // function myMiddlewere (request, response, next){      // conseguimos extrair a requisição, a resposta e o next (destino da requisição)
  //   console.log("Voce passou pelo middleware");
  //   console.log(request.body);                          // para acessar o corpo da requisição
   
  //   if(!request.body.admin){                            // se for diferente de true -  se for false
  //     return response.json({ message: "Msg do middleware - Acesso negado"}) // return para parar a funcao - message de retorno pelo middleware
  //   }

  //   next()                                              // funcao do middleware que chama a proxima funcao - DESTINO
  // }
  


  const usersController = new UsersController();                      // fazendo uma new - nova instacia

  // rota - funcao para criar (create) um usuario
  usersRoutes.post("/", myMiddlewere,  usersController.create);       // rota 1° - criando o usuario - chamando o crete de dentro do controller

  module.exports        = usersRoutes;                                // EXPORTANDO esse arquivo para o server.js e todo mundo que quiser usar //












  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // middleware
  // criando uma funcao middleware p intecpeta a requisição e faz autentificações

  // function myMiddleware (request, response, next){          // consigo acessar a requisição, resposta e destino //
  //
  //   console.log("Voce passou pelo middlerewere")
  //
  //   if(!request.body.isAdmin){                              // validação, se for diferente do admin, message nao autorizado
  //     return response.json({ message: "Nao autorizado" })   // return intemrrompe
  //   }
  //
  //   next()                                                  // chama o destino - usersController.create)
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // usersController é uma classe, por isso preciso instanciar ele na memoria = reservando um espaço para a classe

  // app.get("/users", (request, response) => {  // fucnao extrair a requisição
  //
  //   const { page, limit } = request.query;    // desestruturando de dentro do request.query
  //
  //   response.send(`A Página procurada é: ${page} e vai Mostrar: ${limit} de limite para teste`);
  //
  // })