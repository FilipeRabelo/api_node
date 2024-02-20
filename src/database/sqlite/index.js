
  // function sqliteConnection() - LIDAR COM O BANDO DE DADOS //

  const sqlite3 = require("sqlite3");                         // esse é o driver - IMPORTANDO
  const sqlite  = require("sqlite");                     // responsável por conectar - IMPORTANDO
  const path = require("path");            // lidar com os endereços em ambiente diferentes

  async function sqliteConnection(){    // funcao assicrona para lidar com o banco de dados

    const database = await sqlite.open({      // objeto {} - .open() - abrir uma conexão

      filename: path.resolve(__dirname, "..", "database.db"),     // criando e salvando o arquivo database.db
      driver: sqlite3.Database                                    // qual é driver vou usar
    });

    return database;
  }

  module.exports = sqliteConnection;     // vou usar a conexÃo com o BD no server.js


  // CRIANDO E SALVANDO ARQUIVO - CONEXÃO COM O BANCO DE DADOS
  // filename é a propriedade que vai onde o arquivo vai ficar salvo
  // quero q o arquivo fique salvo na raiz dessa pasta
  // biblioteca ( PATH ) nativa do node.js - resolve os endereços de acordo com o ambiente