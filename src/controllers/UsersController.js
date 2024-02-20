    // PRIMEIRO CONTROLLER - CRIANDO A REQUISIÇÃO - RESPONSAVEL POR PROCESSAR A REQUISIÇÃO - REGRAS DE NEGOCIO

    const { hash } = require("bcryptjs");           // criptgrafia - hash -> funcao para gerar a criptgrafia - IMPORTANDO //
    const AppError = require("../utils/AppError");  // app error para exibir algum tipo de error //
    const sqliteConnection = require("../database/sqlite");

    class UsersController {

      // CRIANDO USUÁRIO
      async create( request, response ){                   // Função p criar usuario - ASYNC create() - METODO ASSINCRONO - FUNCAO

        const { name, email, password } = request.body;    // desestruturando - requisição //
        const database = await sqliteConnection();  //CRIANDO O DATABASE - await pq como vou conectar com o bd, esse precisa ser assincrono

        // VERIFICANDO SE EMAIL EXISTE //

        const checkUsersExist  = await database.get(
            "SELECT * FROM users WHERE email = (?)",    // LENDO A TABELA - SELECT - selecionado todos os email da tabela users
            [email]
        );

        if(checkUsersExist){
          throw new AppError("Este email ja está em uso! ");     // RETORNANDO UMA EXCEÇÃO E A MSG DE RESPOSTA
        }

        // throw - exceção
        // usando uma exceção ele nao continua executar a aplicação, ele para aqui

        // criptografia - antes de inserir os dados no banco vou criptografar a senha

        const hashedPassword = await hash(password, 8);

        // CASO NAO EXISTA O EMAIL ELE SEGUE O FLUXO E CRIA A CRIPTOGRAFIA DA SENHA E LOGO DEPOIS INSERE NO BANCO OS DADOS
        // PASSANDO A FUNCAO DE HASH PARA DENTRO DA VARIAVEL password - hashedPassword
        // PASSAR 2 PARAMS - a senha e o (salt - fator de complexidade da criptografia)


        // INSERINDO NA TABELA - EXECUTANDO E RODANDO O DATABASE //

        await database.run(                                                        // executar - rodando o database
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",     // INSERINDO DADOS NO BD
            [name, email, hashedPassword]                                  // vetor com as infor enviados pelo usuario
        );

        return response.status(201).json({
            status : "success",
            message: "Deu certo"
        });
      }


      // ATUALIZANDO USUÁRIO

      async update(request, response){         // Função p atualização do usuario - ASYNC create()

        const { name, email } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();

        const user = await  database.get("SELECT * FROM users WHERE id = (?)", [id]); // buscando pelo usuario

        if(!user){
          throw new AppError("Usuário nao encontrado - (SELECT * FROM users WHERE id = (?), [id])");
        }

        // SE NAO ENCONTRAR O USER ELE SEGUE O FLUXO E NAO PARA

        // SE A PESSOA ESTIVER TENTANDO MUDAR O EMAIL QUE JA EXISTA

        const userWithUpdateEmail = await database.get(   // BUSCAR - onde o email for igual ao email

          "SELECT * FROM users WHERE EMAIL = (?)",
          [EMAIL]
        );

        // SE ELE ENCONTRAR UM EMAIL DENTRO

      }

    }

    module.exports = UsersController;





    // VARIAVEL dentro do vetor [EMAIL] SUBSTITUE (?)

    // class permite que dentro dela EXISTA varias funções, a partir de uma class eu posso criar e acessar varias funções
    // CRIANDO UMA REQUISIÇÃO // CRIANDO O UsersController - USERS
    // funcao p criar um usuario - class - objeto - a class sabe que o create é um novo metodo-funcao
    // CRIANDO request - preciso de uma requisição e uma resposta
    // obtendo info do requeste.body - corpo da requisição -desestruturando
    // devolvendo atraves de um json as info para o body - info que vao vim pelo corpo da requisição saõ JSON()

    //  padrao - um controller pode ter no maximo 5 funções/metodos
    // * index - get para listar varios registros. ex: todos os usuarios cadastrados - index. get
    // * show - GET para existir um registro específico - 2ex: um usuario específico
    // * create - POST para criar um registro
    // * update - PUT para atualiza rum registro
    // * delet - DELETE para remover um registro
    // ( padrao do controller - maximo 5 metodos )


    // if(!name){                                                       // estou tratando os erros
    //
    //   // throw new - exceção // se o nome nao existe vou lançar uma exceção - MESSAGEM DE ERRO
    //   throw new AppError("O nome é obrigatório");                    // criando a messagem
    // }
    //
    // response.status(201).json({ name, email, password });            // respondendo