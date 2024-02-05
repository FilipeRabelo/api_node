  // CRIANDO A MIGRATIONS - createUsers PARA CRIA AS TABELAS - AUTOMAÇÃO+
  // USAR A INTERPOLAÇÃO PARA FICAR MAIS FACIL DE ESCREVER
  // CODIGO QUE FARIA MANUALMENTE NO SGBD - FAZER COM JS
  // IF NOT EXISTS para criar a tabela SE ela nao existir!  (USERS)


  // NOT EXISTS para se caso existir a tabela
  // so vai criar a tabela se ela nao existir

  const createUsers = `   

    CREATE TABLE IF NOT EXISTS users(  
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR,
      email VARCHAR,
      password VARCHAR,
      avatar VARCHAR NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    
  `;

  module.exports = createUsers;