# Park-man
Aplicação web do projeto ParkMan, Faculdade Bilac 3°semestre

# Configurações e endereço base
Para se conectar com a api, você pode clonar o repositório aqui mesmo no Github ou então acessar o endereço: https://parkman-backend.herokuapp.com, onde a api está hospedada.

# Hospedagem
A API está hospedada em um servidor do Heroku, uma plataforma que disponibiliza servidores de forma gratuita para hospedagem de aplicações. O Heroku conecta com o Github da API e automaticamente monta todo o ambiente necessário para rodar o servidor Web.

# Tecnologias
Para criar esta API, foi utilizado o MongoDB, um banco de dados NoSQL que conversa muito bem com NodeJS, além de todo ecossistema NodeJS, na versão 12.10.0, uma versão bem recente do NodeJS. Todo Javascript está atualizado com ECMA2015+ 

# Rotas para a API
Para utilizar as rotas, basta usar o endereço base ou http://localhost:3333 para acessar a api e após passar o endereço

* GET - '/vacancy': Retorna todas as vagas contidas no banco de dados, sem filtros.
* POST - '/vacancy': Cadastra uma nova vaga, para isso é necessário todas as informações de uma vaga no body da requisição, desta forma: 
```
{
  "vacancy": *O nome da vaga,
  "idOccupant": *O id de quem está ocupando, como a vaga está sendo criada, este campo será 0,
  "sector": *O setor que a vaga ocupa
}
```
* UPDATE - '/vacancy': Edita alguma vaga existente, normalmente será usada para marcar que alguém reservou a vaga, alterando o idOccupant, e no body da requisição é necessário: 
```
{
  "_id": *Um campo criado pelo próprio MongoDB, é o id de um registro, ele não pode ser mudado, mas serve para o banco saber qual registro dele estamos querendo trocar
  "idOccupant": *O id de quem está ocupando 
}
```
* GET  - '/vacancy/available': Retorna todas as vagas que ainda não foram preenchidas, ou seja, apenas as vagas vazias
