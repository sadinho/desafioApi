# Api desafio Sade

É uma simples api escrito em typeScript, possui teste de api basico com jest, documentação api swagger,
controles de transações e conexões, typeOrm, express, algumas estruturas de basicas em sql.


O sistema de migrate irá criar a estrutura inicial do banco auomaticamente quando for iniciado a primeira vez.

## Pré-requisitos
  essa aplicação sou a versão do node 14.15.1, mas fique a vontade em usar outras versões, mas para garantir a plena funcionalidade tente usar a versão citada.
## Instalação

  Crie um banco de dados no postgres;

  Renomeie crie um arquivo .env use os dados do .env.exemple

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)