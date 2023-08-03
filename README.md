# Título do Projeto: 
Teste para vaga de Desenvolvedor Backend


# Descrição: 
O Sistema deverá contemplar os módulos: Cliente, Produto e Pedido. Um Pedido pertence a um Cliente e um Pedido contém vários Produtos.

A API será utilizada para o client que irá realizar os pedidos. Nesse sentido, ela deverá conter endpoints para que um Cliente possa se cadastrar. Além de criar, listar, ver e excluir Pedidos de um Cliente específico. Obs.: Para evitar autenticação, o id do Cliente pode ser usado como parâmetro para realizar essas ações.

O painel administrativo deve conter uma autenticação básica. E através dele deverá ser possível listar Clientes e listar Pedidos, além de poder gerenciar os Produtos da lanchonete..

Os campos para cada entidade serão:

Cliente: nome, email, telefone e endereço;
Produto: nome e preço;
Pedido: código do cliente, código do produto, data de criação e status do pedido.
O Pedido poderá conter os status: Pendente, Em preparo, Em entrega, Entregue e Cancelado.

# Pré-requisitos: 
Não poderá existir mais de um Cliente com o mesmo email ou telefone;
Todos os dados deverão ser validados;
Um Cliente não pode excluir um Pedido criado por outro Cliente.

# Desenvolvimento:
Utilização de HTML, CSS, Javascript, Node, MongoDB, Postman e CORS.
Foi criado um repositório no github com commit adicionados no decorrer do desenvolvimento.

# Status do Projeto: 
Assim que finalizado o desafio o link do repositório e do live preview será disponibilizado na comunidade do Discord, no canal "Avaliação de Testes".


# Agradecimentos: 
Agradeço ao professor Thiago Medeiros pelas ótimas aulas que foram fundamentais para o meu recomeço nesta nova jornada profissional.
