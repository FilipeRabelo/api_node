    // PRIMEIRO CONTROLLER - CRIANDO A REQUISIÇÃO
    // RESPONSAVEL POR PROCESSAR A REQUISIÇÃO     // REGRAS DE NEGOCIO
    // class permite que dentro dela EXISTA varias funções, a partir de uma class eu posso criar e acessar varias funções


    class UsersController {                                         // a calsse sabe que o create é um novo metodo-funcao

        // CRIANDO UMA REQUISIÇÃO // CRIANDO O UsersController - USERS
        async create(request, response){                            // CRIANDO request - preciso de uma requisição e uma resposta

            const { name, email, password } = request.body;         // obtendo info do requeste.body - corpo da requisição -desestruturando
            response.status(201).json({ name, email, password });   // devolvendo atraves de um json as info para o body - info que vao vim pelo corpo da requisição saõ JSON()
        }
    }

    module.exports = UsersController;



    /* padrao - um controller pode ter no maximo 5 funções/metodos

        * index - get para listar varios registros.
        ex: todos os usuarios cadastrados - index. get

        * show - GET para existir um registro específico - 2ex: um usuario específico

        * create - POST para criar um registro

        * update - PUT para atualiza rum registro

        * delet - DELETE para remover um registro

        ( padrao do controller - maximo 5 metodos )

    */