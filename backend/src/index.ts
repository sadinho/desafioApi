/* Dependência do TypeORM que deve ser inclusa na raiz do projeto */
import 'reflect-metadata';

/* Conexão SGBD do TypeORM */
import './infra/connect';

/* import Dependências */
import { API_PORT, NODE_ENV } from './environment';
import cors from 'cors';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';

/* import Router */
import { appRouter } from './controller/app';
import { categoriaRouter } from './controller/categoria';
import { produtoRouter } from './controller/produto';
import { swaggerRouter } from './controller/swagger';

const app = express();

app.use(express.json());

/*
  Compactação gzip reduzindo corpo de resposta e
  aumentando a velocidade de trafego de respostas
*/
app.use(compression());

/*
  Combinado de middwares que intensificam 
  a segurança nos cabeçalhos HTTP (https://helmetjs.github.io/)
*/
app.use(helmet({contentSecurityPolicy: false}));

/*
  Cross-Origin Resource Sharing(Compartilhamento de recursos com origens diferentes)
  é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita 
  que um aplicativo Web seja executado em uma origem (domínio)
*/
app.use(cors());

// Rota prefixada
const routerPreFix = '/api/v1';

/* Routers dos controladores */
app.use(routerPreFix, appRouter);
app.use(routerPreFix, categoriaRouter);
app.use(routerPreFix, produtoRouter);
app.use(routerPreFix, swaggerRouter);

if (NODE_ENV) {
  app.listen(
    API_PORT,
    () => {
      let icon = '\u26F3';
      let description = NODE_ENV

      if (description === 'production') {
        icon = '\u2B50';
        description = description.toUpperCase();
      }    
      
      console.log(`${icon} - Env.: ${description}. Port ${API_PORT}`)
    }
  );
}
else {
  console.log(`\u274C\ - Environment file not found.`);
}
