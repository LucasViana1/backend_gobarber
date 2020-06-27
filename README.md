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
