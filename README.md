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
- Dependency Invertion Principle: cada arquivo/classe irá utilizar o mesmo objeto utilizado na manipulação de dados (ex. repositories), não serão instanciadas novamente em cada outra classe que o utiliza;

DTO: Data Transfer Object;

Soc:

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
