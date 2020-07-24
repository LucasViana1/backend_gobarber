## Scripts

### `yarn init -y`

cria package.json

### `yarn tsc --init`

cria tsconfig.json

### `yarn tsc`

gera arquivos dist

### `yarn ts-node-dev --transpileOnly --ignore node_modules src/server.ts`

roda api em dev

## Arquitetura de software

### Conceitos

SOLID:

- Single Responsability Principle: cada arquivo/classe possui apenas uma responsabilidade;
- Open Closed Principle:
- Liskov Substitution Principle: dado um conjunto de regras, cada camada da aplicação deve ser passível de alteração, onde os serviços devem compreender métodos, sem se preocupar com o banco/orm utilizado por trás;
- Interface Segregation Principle:
- Dependency Invertion Principle: cada arquivo/classe irá utilizar o mesmo objeto utilizado na manipulação de dados (ex. repositories), não serão instanciadas novamente em cada outra classe que o utiliza;

DTO: Data Transfer Object;

Soc:

DDD: Domain Driven Design

### Responsabilidade

- Routes: Transformação de dados, recebe requisição, envia a requisição para outro arquivo manipula-lo e retorna uma resposta
- Repositories: manipular dados (operações de CRUD)
- Services: Regra de negócio (possuindo apenas um método), condicionais, verificação de erros
- Model: Formato dos dados de uma entidade

## Banco de dados

Níveis de abstração: driver nativo (pg do postgres), query builder (knex), ORM (sequelize, typeORM)

## TypeORM (com script personalizado package.json)

Migrations: padroniza e facilita o uso do banco de dados entre times de desenvolvimento.
A edição de uma migration que ja tenha sido executada só deve ocorrer caso ela não tenha subido no repositório, do contrário é necessário criar uma nova migration

### `yarn typeorm`

Referência ao cli.js do node_modules do typeORM

### `yarn typeorm migration:create -n nome_migration`

Cria uma nova migration

### `yarn typeorm migration:run`

Executa todas as migrations no banco de dados

### `yarn typeorm migration:revert`

Cancela a migration, removendo as alterações feita por ela

### `yarn typeorm migration:show`

Visualiza todas as migrations já executadas

## Docker

### `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres`

Exemplo de comando para criação de nova imagem com postgres

### `docker ps`

Exibe containers executando (ativos)

### `docker ps -a`

Exibe todos containers existentes (ativos e inativos)

### `docker start id_container`

Ativa um container, passando seu id

### `docker stop id_container`

Desativa um container, passando seu id

### `docker logs id_container`

Exibe logs do container

## Links

Gerar md5:
http://www.md5.cz/
https://www.md5online.org/

Decode jwt token:
https://jwt.io/

# Engenharia de software

## Recuperação de senha

**Requisitos funcionais**

- O usuários deve recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**

- Utilizar MailTrap para testar envios de e-mail em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de negócio**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

## Atualização Perfil

**Requisitos funcionais**

- O usuários deve poder atualizar seu perfil nome, e-mail e senha;

**Regras de negócio**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar sua senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do prestador

**Requisitos funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas

**Requisitos não funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenados no MongoDB;
- As notificações do prestador deve ser enviados em tempo real utilizando Socket.io

**Regras de negócio**

- As notificações deve ter um status de lida ou não lida para que um prestador possa controlar

## Agendamento de serviços

**Requisitos funcionais**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devel estar disponíveis entre 8h ás 18h (primeiro as 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
