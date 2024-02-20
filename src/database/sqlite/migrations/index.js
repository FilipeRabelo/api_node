
  // sqliteConnection - IMPORTANDO A CONEXÃO
  const sqliteConnection = require('../../sqlite');

  // IMPORTANDO O createUsers  // migrations  // criando a tabela // IMPORTANDO tabela users do banco de dados
  const createUsers      = require('./createUsers');

  // function para rodar - EXECUTAR as migrations - migrationsRun()
  async function migrationsRun(){

    const schemas = [                         // objeto - SCHEMAS = TABELAS - PASSAR UN VETOR PQ POSSO TER VARIAS MIGRATIONS

      createUsers                             // migrations: createUsers - tabela createdUsers em createdUsers.js

    ].join('');                               // pegando todas as migrations e join para juntar todas elas - jutando todas

    sqliteConnection()
      // .then() - promise - chamando o sqliteConnection // exec() - vou executar os meus esquemas - schemas
      .then(db => db.exec(schemas))
      .catch(error => console.error(error));  // se der error - tratar o error
  }

  // console.log(createUsers)

  module.exports = migrationsRun;             // exportando a função migration



  // MIGRATIONS SAO USADAS EM CONJUNTO COM O BD
  // PARA GERENCIAR E CONTROLAR AS ALTERAÇÕES NA ESTRUTURA DO BD AO LONGO DO TEMPO

  // As MIGRATIONS no Node.js são utilizadas para controlar e gerenciar alterações na estrutura do banco de dados
  // de forma controlada e reversível. Elas garantem a consistência do SCHEMAS - esquemas do banco de dados entre ambientes
  // de desenvolvimento e produção, facilitando o versionamento e a implantação do aplicativo.
  // Em resumo, as MIGRATIONS permitem atualizações seguras e consistentes no banco de dados ao longo do tempo.
  // elas permitem que você adicione, modifique ou exclua tabelas,
  // colunas ou restrições no banco de dados de uma maneira que possa ser desfeita.