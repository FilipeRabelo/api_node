  // AppError.js p fazer o tratamento de exceção - mesmo se der erro a app continua funcionando
  // padronização de qual tipo de msg vai aparece qndo eu tiver uma exceção
  // criando as variaveis no topo e toda a class pega seu valor e consegue acessar ela dentro de qualuqer funcao
  // toda class tem o metodo construtor - carregado automaticamente qndo a classe é instaciada
  // instanciar - criar um novo objeto do mesmo tipo da classe
  // constructor cria um novo objeto e inicia um objeot criado apartir de uma class
  // bibliotecas para lidar com errors : npm install express-async-errors --save

  // CLASSE DE ERROR
  class AppError{                              // criando a classe
    message;                                   // criando variaveis no TOPO da class
    statusCode;                                // criando variaveis no TOPO da class

    // constructor - criando e inicializando o objeto
    constructor(message, statusCode = 400){
      this.message    =  message;              // this faz referencia a variavel -
      this.statusCode =  statusCode;           // repassando as informações para a variavel message e statusCode
    }
  }


  module.exports = AppError;