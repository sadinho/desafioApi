# Aplicação com api completa

Está aplicação consiste de duas camadas frontend e backend.

Para executar deverá executar o backend e o frontend de maneira simultanea

Porém pode se usar o backend como api apenas sem a necessidade do frontend.

O frontend é um client da api para testar e usar as operações da api.

cada camada tem suas estruções de uso em cada readme.me (frontend e backend), siga as instruções

## Requisitos gerais
Para executar em ambiente local é preciso ter previamente instalado:

pode se obter nos links a seguir
[Ambiente de downloads:](https://www.postgresql.org/download/)

[node ](https://nodejs.org/en/blog/release/v14.15.1/)

## Pré-requisitos
  essa aplicação execultou naa versão do node 14.15.1, mas fique a vontade em usar outras versões, mas para garantir a plena funcionalidade tente usar a versão citada.

## Instalação frontend

  1-clone o repositorio
  
  ```bash
  cd frontend
   ```

 Dentro da pasta frontend:
  
  Renomeie crie um arquivo .env use os dados do .env.exemple caso não exista

  Execute no terminal
  ```bash
  yarn 
  ```
  ou
  ```bash
  yarn install
  ```
  ou
  ```bash
  npm install
  ```
  após a instalação dos pacotes 
  Execute no terminal para modo de desenvolvimento
  ```bash
  yarn start
  ```
  ou 
  ```bash
  npm run start
  ```
  ## Teste
  Execute no terminal
  ```bash
  yarn test
  ```
  ou 
  ```bash
  npm run test
  ```
  ## Gerando a build
  Execute no terminal
  ```bash
  yarn build
  ```
  ou
  ```bash
  npm run build
  ```
  ## Executar Build (produção)
  Execute no terminal
  ```bash
  yarn serve
  ```
  ou 
  ```bash
  npm run serve
  ```
## deploy
Execute no terminal
  ```bash
  yarn deploy
  ```
  ou 
  ```bash
  npm run deploy
  ```

## Visualizando a aplicação
  [localhost:3000](http://localhost:3000/) para ambiente dev
  ou
  suaUrl para prod

  acesso ao SCHEMA json prodtos
  para ambiente dev 
   [localhost:3333](http://localhost:3333/)/api/v1/produtos 
   ou
   para prod
  suaUrl/api/v1/produtos
  
  ## Instalação backend
   ```bash
  cd backend
   ```

  Crie um banco de dados no postgres;

  Renomeie crie um arquivo .env use os dados do .env.exemple caso não exista

  No arquivo de variavel de ambiente (.env) coloque as credenciais do banco para acesso (obs: não precisa criar nenhuma tabela);

  Execute no terminal
  ```bash
  yarn 
  ```
  ou
  ```bash
  yarn install
  ```
  ou
  ```bash
  npm install
  ```
  após a instalação dos pacotes 
  Execute no terminal para modo de desenvolvimento
  ```bash
  yarn dev
  ```
  ou 
  ```bash
  npm run dev
  ```
  ## Teste
  Execute no terminal
  ```bash
  yarn test
  ```
  ou 
  ```bash
  npm run test
  ```
  ## Gerando a build
  Execute no terminal
  ```bash
  yarn build
  ```
  ou
  ```bash
  npm run build
  ```
  ## Executar Build (produção)
  Execute no terminal
  ```bash
  yarn prod
  ```
  ou 
  ```bash
  npm run prod
  ```
## Acesso a documentação api swagger
  localhost:3333/api/v1/api-lib para dev
  ou
  suaUrl/api/v1/api-lib para prod

  acesso ao SCHEMA json swagger 
   localhost:3333/api/v1/api-lib-json para dev 
   ou
  suaUrl/api/v1/api-lib-json para prod


## License
[MIT](https://choosealicense.com/licenses/mit/)
