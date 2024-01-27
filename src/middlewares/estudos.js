//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// middleware  sao nas rotas - interceptam as rotas

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