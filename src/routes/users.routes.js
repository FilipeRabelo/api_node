  // todas as ROTAs Dos USUARIOs
  // userROutes - grupo de rotas do usuario
  // QUERY PARAMS - valores sao opcionais - iniciLI\nso o Router


  const { Router }      = require("express")           // importação - trazendo o Router de dentro do express - desestruturando

  const UsersController = require("../controllers/UsersController")   // importando o controller

  const usersRoutes     = Router();                    // INICIALIZANDO O Router









  const usersController = new UsersController();       // fazendo uma new - nova instacia

  usersRoutes.post("/", usersController.create); // funcao p redirecionar e extrair a requisição // indentificar o endereço
  module.exports        = usersRoutes;                 // EXPORTANDO esse arquivo para o server.js e todo q quier mundo usar //





  // usersController é uma classe, por isso preciso instanciar ele na memoria = reservando um espaço para a classe

  // app.get("/users", (request, response) => {  // fucnao extrair a requisição
  //
  //   const { page, limit } = request.query;    // desestruturando de dentro do request.query
  //
  //   response.send(`A Página procurada é: ${page} e vai Mostrar: ${limit} de limite para teste`);
  //
  // })