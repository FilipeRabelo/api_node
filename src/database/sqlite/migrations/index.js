
// IMPORTANDO O createUsers  // migrations  // criando a tabela

  const sqliteConnection = require('../../sqlite');    // IMPORTANDO A CONEXÃO
  const createUsers      = require('./createUsers');   // IMPORTANDO tabela users do banco de dados

  async function  migrationsRun(){ // function para rodar - EXECUTAR as migrations

    const schemas = [
        // objeto - SCHEMAS = TABELAS - PASSAR UN VETOR PQ POSSO TER VARIAS MIGRAIONS

      createUsers                  // migrations: createUsers - tabela createdUsers em createdUsers.js

    ].join('');                    // pegando todas as migrations e join para juntar todas elas - jutando todas

    sqliteConnection()                        // .then() - promise - chamando o sqliteConnection
      .then(db => db.exec(schemas))       // vou executar os meus esquemas - exec / schemas
      .catch(error => console.error(error));  // se der error - tratar o error
  }

  // console.log(createUsers)

  module.exports = migrationsRun;             // exportando a função migration