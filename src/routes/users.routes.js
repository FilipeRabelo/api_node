  // todas as ROTAs Dos USUARIOs
  // userROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router

  // desestruturando express
  const { Router }      = require("express")               // importação - trazendo o Router de dentro do express -
  const UsersController = require("../controllers/UsersController")   // importando o controller

  const usersRoutes     = Router();                        // INICIALIZANDO O Router


  // middleware
  // criando uma funcao middleware p intecpeta a requisição e faz autentificações

  function myMiddleware (request, response, next){          // consigo acessar a requisição, resposta e destino //

    console.log("Voce passou pelo middlerewere")

    if(!request.body.isAdmin){                              // validação, se for diferente do admin, message nao autorizado
      return response.json({ message: "Nao autorizado" })   // return intemrrompe
    }

    next()                                                  // chama o destino - usersController.create)
  }


  const usersController = new UsersController();            // fazendo uma new - nova instacia

  // rota 1° //
  usersRoutes.post("/", myMiddleware, usersController.create); // criando a rota do users

  module.exports        = usersRoutes;                      // EXPORTANDO esse arquivo para o server.js e todo mundo que quiser usar //





  // usersController é uma classe, por isso preciso instanciar ele na memoria = reservando um espaço para a classe

  // app.get("/users", (request, response) => {  // fucnao extrair a requisição
  //
  //   const { page, limit } = request.query;    // desestruturando de dentro do request.query
  //
  //   response.send(`A Página procurada é: ${page} e vai Mostrar: ${limit} de limite para teste`);
  //
  // })