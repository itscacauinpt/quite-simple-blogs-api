<img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png" alt="logo jest" width="80px" align="right">

# Project MySQL One For All
> Status do Projeto: concluído :heavy_check_mark: :warning:

> :warning: Extras:
> - [ ] Aplicar Swagger
> - [ ] Aplicar Testes


Projeto feito de forma individual durante o curso da [Trybe](https://www.betrybe.com/). Projeto com o objetivo de desenvolver uma API e um banco de dados para a produção de conteúdo para um blog!
## 🔧 Funcionalidades

* Aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.
* Endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
* Relações entre user e post;
* Utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

## 👩‍💻 Tecnologias

* Express.js
* Sequelize
* MySQL
* Joi
* JWT

## 💻 Como testar manualmente

:point_right: Para testar com o Docker (warning o docker-compose precisa estar na versão 1.29 ou superior):

* rode os serviços node e db com o comando <code>docker-compose up -d --build</code>
* use o comando <code>docker exec -it blogs_api bash</code>
* instale as dependências <code>npm install</code> e inicie o app <code>npm start</code>

:point_right: Sem Docker

* instale as dependências <code>npm install</code> e inicie o app <code>npm start</code>

<hr/>

<div align="center">Copyright :copyright: Trybe 2022 - Project MySql Blog's API
<br/>
Realizado de acordo com as diretrizes do <a href="https://blog.betrybe.com/wp-content/uploads/2020/12/Código-de-Conduta-Trybe-1.pdf" >Código de Conduta e do Manual da Pessoa Estudante da Trybe</a>.</div>
