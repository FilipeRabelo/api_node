
    // PRIMEIRO CONTROLLER - CRIANDO A REQUISIÇÃO - RESPONSAVEL POR PROCESSAR A REQUISIÇÃO - REGRAS DE NEGOCIO
    // class permite que dentro dela EXISTA varias funções, a partir de uma class eu posso criar e acessar varias funções
    // CRIANDO UMA REQUISIÇÃO // CRIANDO O UsersController - USERS
    // funcao p criar um usuario - class - objeto - a class sabe que o create é um novo metodo-funcao
    // CRIANDO request - preciso de uma requisição e uma resposta
    // obtendo info do requeste.body - corpo da requisição -desestruturando
    // devolvendo atraves de um json as info para o body - info que vao vim pelo corpo da requisição saõ JSON()
    /* padrao - um controller pode ter no maximo 5 funções/metodos
        * index - get para listar varios registros. ex: todos os usuarios cadastrados - index. get
        * show - GET para existir um registro específico - 2ex: um usuario específico
        * create - POST para criar um registro
        * update - PUT para atualiza rum registro
        * delet - DELETE para remover um registro
        ( padrao do controller - maximo 5 metodos )
    */


    // app error para exibir algum tipo de error

    const AppError = require("../utils/AppError");
    const sqliteConnection = require("../database/sqlite")

    class UsersController {

      async create( request, response ){                 // METODO ASSINCRONO

        const { name, email, password } = request.body;                  // requisição
        const database = await sqliteConnection();               // await pq como vou conectar com o bd, esse precisa ser assincrono

        const checkUsersExist  = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(checkUsersExist){                                             // VERIFICACAO SE EMAIL EXISTE
          throw new AppError("Este email ja esta em uso! ");
        }

        return response.status(201).json();
      }
    }

    module.exports = UsersController;





    // if(!name){                                                       // estou tratando os erros
    //
    //   // throw new - exceção // se o nome nao existe vou lançar uma exceção - MESSAGEM DE ERRO
    //   throw new AppError("O nome é obrigatório");                    // criando a messagem
    // }
    //
    // response.status(201).json({ name, email, password });            // respondendo