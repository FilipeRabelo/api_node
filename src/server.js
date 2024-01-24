  // NODEMON
  // CRIANDO O SERVIDOR
  // IMPORTANDO O EXPRESS
  const express = require("express");  // colocando tudo do modulo express dentro da variavel  - require = exibir/importar

  // IMPORTANDO AS ROTAS PELO INDEX
  const routes  = require("./routes"); // /index.js - carregando o arquivo index.js dentro da pasta routes - rotas importadas

  // INICIALIZANDO O EXPRESS EM APP
  const app     = express();           // para inicializar o express - ele ajuda a gerenciar as requisiçẽos http
 
  // preciso dizer que vamos usar o json antes das rotas
  app.use(express.json());             // ATENCION - dizendo ao app q vamos usar o padrao json()
  app.use(routes);                     // app deve usar essas rotas


  const PORT    = 3333;                // preciso dizer ao express qual porta ele vai ficar escutando // listen()
  app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

  //  listen(fica escutando a porta)