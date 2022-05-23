import * as environment from '../environment';
import { buildSchemas } from './rootSchemas';

import buildCategoria from './paths/CategoriaSwagger';
import buildProduto from './paths/ProdutoSwagger';

function buildRoot(): object {
  return {
    'openapi': '3.0.0',
    'info': {
      'title': 'Desafio sade - API',
      'contact': {
        'email': 'drdimsade@gmail.com'
      },
      'version': '1.0.0'
    },
    'servers': [
      {
        'url': environment.API_URL,
        'description': 'API - desafio Sade'
      }
    ],
    'paths': {
      ...buildCategoria,
      ...buildProduto,
    },
    'components': {
      'schemas': buildSchemas(),
    }
  }
}


export default buildRoot();