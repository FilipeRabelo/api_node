
  // IMPORTANDO O createUsers - migrations - criando a tabela //


  const sqliteConnection = require('../../sqlite');  // IMPORTANDO A CONEXÃO

  const createUsers = require('./createUsers');    // tabela users do banco de dados

  async function  migrationsRun(){  // function para rodar / EXECUTAR as migrations

    const schemas = [        // SCHEMAS = TABELAS - PASSAR UN VETOR PQ POSSO TER VARIAS MIGRAIONS
      createUsers                   // tabela createdUsers em createdUsers.js
    ].join('');                     // pegando todas as migrations e join para juntar todas elas

    // .then( - promise
    sqliteConnection()                        // .then() - promise - chamando o sqliteConnection
      .then(db => db.exec(schemas))     // vou executar os meus esquemas - exec / executar meu esquemas/schemas
      .catch(error => console.error(error))   // tratando o error

  }

  module.exports = migrationsRun;             // exportando a função migration