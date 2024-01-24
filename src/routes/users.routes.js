  // Todas as ROTAs Dos USUARIOs
  // UserROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router

  // desestruturando express e importando as Router

  const { Router }      = require("express")                          // importação - trazendo o Router de dentro do express
  const UsersController = require("../controllers/UsersController")   // importando o controller
  
  const usersRoutes     = Router();                                   // aqui esta as rotas // INICIALIZANDO O Router
  
  const usersController = new UsersController();                      // fazendo uma new - nova instacia

  usersRoutes.post("/",  usersController.create);  // rota - funcao para criar (create) um usuario criando users - chamando o crete de dentro do controller

  module.exports        = usersRoutes;                                // EXPORTANDO esse arquivo para o server.js e todo mundo que quiser usar //



  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // middleware
  // criando uma funcao middleware p intecpeta a requisição e faz autentificações

  // usersRoutes.use(myMiddlewere); // para colocar para todas as rotas

    // middleware de autentificação
    // function myMiddlewere (request, response, next){      // conseguimos extrair a requisição, a resposta e o next (destino da requisição)
    //   console.log("Voce passou pelo middleware");
    //   console.log(request.body);                          // para acessar o corpo da requisição
     
    //   if(!request.body.admin){                            // se for diferente de true -  se for false
    //     // resposta
    //     return response.json({ message: "Msg do middleware - Acesso negado"}) // return para parar a funcao - message de retorno pelo middleware
    //   }
  
    //   next()                                              // funcao do middleware que chama a proxima funcao - DESTINO
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