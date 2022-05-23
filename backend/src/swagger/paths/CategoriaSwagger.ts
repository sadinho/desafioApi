import { CategoriasCreateSchema } from '../../model/CategoriasModel';

function buildCategoria(): object {
  return {
    '/api/v1/create': {
      'post': {
        'summary': 'Criar categoria',
        'parameters': [
          {
            'in': 'body',
            'name': 'body',
            'description': 'Categoria',
            'required': true,
            'schema': {
              'type': 'string',
              'example': '{"nomeCategoria": "Calçados", "id": 1}',
            }
          },
        ],
             
        'tags': ['Categoria'],
        'requestBody': {
          'content': {
            'application/json': {
              "schema": CategoriasCreateSchema(false)
            }
          }
        },
        'responses': {
          '400': { 'description': 'Validation Exception' },
          '200': {
            'description': 'OK',
            'content': {
              'application/json': {
                "schema": CategoriasCreateSchema(false)
              }
            }
          }
        }
      }
    },
    '/api/v1/categoria/{id}': {
      'get': {
        'summary': 'Listar todas as categorias',
        'parameters':[
          {
            'name': 'id',
            'in': 'path',
            'description': 'Id para retornar categoria especifica',
            'required': true,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "id": 1
            }
           },
        ],
        'tags': ['Categoria'],
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
                      "nomeCategoria": {
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
    '/api/v1/categorias': {
      'get': {
        'summary': 'Listar todas as categorias',
        'parameters': [
          {
            'description': 'Sem parametros',
          }
        ],
        'tags': ['Categoria'],
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
                      "nomeCategoria": {
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
    '/api/v1/categoria': {
      'put': {
        'summary': 'Atualizar categoria',
        'parameters': [
          {
            'name': 'id',
            'in': 'body',
            'description': 'Id para atualizar categoria especifica',
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
            'name': 'nomeCategoria',
            'in': 'body',
            'description': 'Nome para atualizar categoria especifica',
            'required': true,
            'type': 'string',
            'format': 'string',
            "schema": {
              "type": "string",
              "nomeCategoria": "sapatos",
              'example': '{"nomeCategoria": "sapatos"}',

            }
          }
        ],
        'tags': ['Categoria'],
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
                      "nomeCategoria": {
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
        'summary': 'Deletar categoria',
        'parameters': [
          {
            'name': 'id',
            'in': 'body',
            'description': 'Id para deletar categoria especifica',
            'required': true,
            'type': 'integer',
            'format': 'int64',
            "schema": {
              "type": "number",
              "id": 1
            }
          }
        ],
        'tags': ['Categoria'],
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
                      "nomeCategoria": {
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

      
    }
              
  }
        
}


export default buildCategoria();