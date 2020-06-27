### Scripts

cria package.json
yarn init -y
cria tsconfig.json
yarn tsc --init
gera arquivos dist
yarn tsc
roda api em dev
yarn ts-node-dev --transpileOnly --ignore node_modules src/server.ts
