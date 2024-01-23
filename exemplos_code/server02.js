// IMPORTANDO O EXPRESS

const express = require("express");  // colocando tudo do modulo express dentro da variavel      // require = exibir

const app = express();              // para inicializar o express - ele quem ajuda a gerenciar as requisiçẽos http


// ROUTER PARAMS  // valores/parametros sao OBRIGATORIOS  // :id -> params / :user -> params

app.get("/message/:id/:user", (request, response) => {

  const { id, user } = request.params;     // desestruturando // paramns para passar valores, informações no endereço na rota
  response.send(                           // enviando send( mensagem )
    `Id da messagem: ${id}    
                    Para o Usuario: ${user}`
  );
})




// QUERY PARAMS  // valores sao opcionais

app.get("/users", (request, response) => {  // fucnao para extrair a requisição

  const { page, limit } = request.query;  // desestruturando de dentro do request.query

  response.send(`A Página procurada é: ${page} e vai Mostrar: ${limit} de limite para teste`);

})




const PORT = 3333;                  // preciso dizer ao express qual porta ele vai ficar escutando // listen()
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));  //  listen(fica escutando a porta)


// app.get("/message/:id/:user", (request, response) => {        // rota "/" -> raiz da api //
//
//   response.send(
//            `Id da messagem: ${request.params.id} -
//                   Para o Usuario: ${request.params.user}`
//   );
//
// })