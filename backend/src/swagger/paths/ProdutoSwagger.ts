import { ProdutosCreateSchema } from '../../model/ProdutosModel';

function buildProduto(): object {
  return {
    '/api/v1/produto/create': {
      'post': {
        'summary': 'Criar produto',
        'parameters': [
          {
            'in': 'body',
            'name': 'body',
            'description': 'Produto',
            'required': true,
            'schema': {
              'type': 'string',
              'example': '{"nomeProduto": "Calçado", "categoriaId": "1"}'
            },
          },
        ],
             
        'tags': ['Produto'],
        'requestBody': {
          'content': {
            'application/json': {
              "schema": ProdutosCreateSchema(false)
            }
          }
        },
        'responses': {
          '400': { 'description': 'Validation Exception' },
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": ProdutosCreateSchema(false)
              }
            }
          }
        }
      }
    },
    '/api/v1/produto/{id}': {
      'get': {
        'summary': 'Listar todas as produtos',
        'parameters':[
          {
            'name': 'id',
            'in': 'path',
            'description': 'Id para retornar produto especifica',
            'required': true,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "id": 1
            }
           },
        ],
        'tags': ['Produto'],
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                      "nomeProduto": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          '400': { 'description': 'Validation Exception' },
          '404': { 'description': 'Not Found' },
        }
      }
    },
    '/api/v1/produtos': {
      'get': {
        'summary': 'Listar todas as produtos',
        'parameters': [
          {
            'description': 'Sem parametros',
          }
        ],
        'tags': ['Produto'],
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                      "nomeProduto": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          '400': { 'description': 'Validation Exception' },
          '404': { 'description': 'Not Found' },
        }
      }
    },
    '/api/v1/produto': {
      'put': {
        'summary': 'Atualizar produto',
        'parameters': [
          {
            'name': 'id',
            'in': 'body',
            'description': 'Id para atualizar produto especifico',
            'required': true,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "id": 1,
              'example': '{"id": "1"}',
            }
          },
          {
            'name': 'nomeProduto',
            'in': 'body',
            'description': 'Nome para atualizar produto especifica',
            'required': true,
            'type': 'string',
            'format': 'string',
            "schema": {
              "type": "string",
              "nomeProduto": "sapatos",
              'example': '{"nomeProduto": "sapatos"}',

            }
          },
          {
            'name': 'idCategoria',
            'in': 'body',
            'description': 'Id para atualizar categoria do produto especifica',
            'required': false,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "idCategoria": 1,
              'example': '{"idCategoria": "1"}',
            }
          }
        ],
        'tags': ['Produto'],
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                      "nomeProduto": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          '400': { 'description': 'Validation Exception' },
          '404': { 'description': 'Not Found' },
        }
      },
      'delete': {
        'summary': 'Deletar produto',
        'parameters': [
          {
            'name': 'id',
            'in': 'body',
            'description': 'Id para deletar produto especifico',
            'required': true,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "id": 1,
              'example': '{"id": "1"}',
            }
          }
        ],
        'tags': ['Produto'],
        'responses': {
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                    }
                  }
                }
              }
            }
          },
          '400': { 'description': 'Validation Exception' },
          '404': { 'description': 'Not Found' },
        }
      }
      
    }
              
  }
        
}


export default buildProduto();