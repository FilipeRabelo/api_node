  // CRIANDO O SERVIDOR - IMPORTANDO O EXPRESS
  // aqui que vamos configurar como ele vai lidar com o tratamento de EXCEÇÕES
  // antes de tudo importar o express-async-error

  // importando BIBLIOTECA DE ERROS express
  require("express-async-errors")

  // importando AS MIGRATIONS - BANCO DE DADOS - DB
  const migrationsRun = require("./database/sqlite/migrations")

  // importando o appError
  const AppError = require("./utils/AppError");

  // colocando tudo do modulo express dentro da variavel  - require = exibir/importar
  const express  = require("express");


  const routes= require("./routes");

  migrationsRun();                             // EXECUTANDO BD - o banco de dados

  const app  = express();     // INICIALIZANDO O EXPRESS EM APP p gerenciar as REQUISIÇÕES http

  // ATENÇÃO - ANTES DAS ROTAS - dizemos ao app q vamos usar o padrao json()
  app.use(express.json());
  app.use(routes);                            // app deve usar essas rotas


  ///////////////////////////////      // Tratamento de ERROR        //////////////////////////////////////

  // antes da PORT preciso CAPTURAR o error, a requisição, a resposta e o next() através do app.use(()); //

  app.use((error,
            request,
              response,
                next) => {

    // VERIFICANDO O ERROR
    // se o erro for um instanceof - se a instancia dele for = a instacia do tipo = ao AppError, vai ser = error do lado do cliente

    if(error instanceof AppError){      // quero saber se é um erro gerado pelo lado do cliente

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

  });

  ///////////////////////////////     // FIM - Tratamento de ERROR      //////////////////////////////////////


  // CRIANDO A PORTA 3333

  const PORT= 3333;
  app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));