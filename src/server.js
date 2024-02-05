  // CRIANDO O SERVIDOR - IMPORTANDO O EXPRESS
  // aqui que vamos configurar como ele vai lidar com o tratamento de EXCEÇÕES
  // antes de tudo importar o express-async-error

  require("express-async-errors")         // importando BIBLIOTECA DE ERROS express

  const migrationsRun = require("./database/sqlite/migrations")    // importando AS MIGRATIONS - BANCO DE DADOS - DB
  const AppError      = require("./utils/AppError");               // importando o appError
  const express       = require("express");    // colocando tudo do modulo express dentro da variavel  - require = exibir/importar
  const routes        = require("./routes");

  migrationsRun();            // EXECUTANDO BD - o banco de dados

  const app  = express();     // INICIALIZANDO O EXPRESS EM APP p gerenciar as REQUISIÇÕES http

  app.use(express.json());    // ATENÇÃO - ANTES DAS ROTAS - dizemos ao app q vamos usar o padrao json()
  app.use(routes);            // app deve usar essas rotas

  // antes da PORT preciso CAPTURAR o error, a requisição, a resposta e o next() através do app.use(());
  app.use((error, request, response, next) => {  // Tratamento de ERROR

    // se o erro for um instanceof - se a instancia dele for = a instacia do tipo = ao AppError, vai ser = error do lado do cliente
    if(error instanceof AppError){      // VERIFICANDO O ERROR quero saber se é um erro gerado pelo lado do cliente

      return response.status(error.statusCode).json({    // DEVOLVENDO UM OBJETO json({}) COMO MENSSAGEM
        status : "error",
        message: error.message
      });
    }

    console.error(error); // debugar o erro caso eu precise

    return response.status(500).json({  // se nao for um erro do lado cliente, vou emitir um erro padrao como respota json({})
      status : "error",
      message: "Internal server error (ERROR SERVIDOR)"
    });

  });    // FIM - Tratamento de ERROR

  const PORT= 3333;
  app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));