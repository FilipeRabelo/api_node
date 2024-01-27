
  //  CRIANDO A CONEXÃO COM O BANCO DE DADOS    //    CRIANDO E SALVANDO ARQUIVO     //

  // filename é a propriedade que vai onde o arquivo vai ficar salvo       //
  // quero q o arquivo fique salvo na raiz dessa pasta                     //
  // biblioteca ( PATH ) nativa do node.js - resolve os endereços de acordo com o ambiente

  const sqlite3 = require("sqlite3");             // esse é o driver             // IMPORTANDO
  const sqlite= require("sqlite");              // responsavel por conectar    // IMPORTANDO
  const path = require("path");     // lidar com os endereços ambiente

  async function sqliteConnection(){   // funcao assicrona para lidar com o banco de dados
    // .open() - abrir uma conexão
    // preciso passar um objeto com configuraçõas da conexao - 1° vou salvar o arquivo do banco
    const database = await sqlite.open({ // objeto {}

      filename: path.resolve(__dirname, "..", "database.db"),  // criando e salvando o arquivo database.db
      driver: sqlite3.Database                                 // qual é driver vou usar
    });

    return;
  }

  // vou usar a conexao com o BD no server;js
  module.exports = sqliteConnection;