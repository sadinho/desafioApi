import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('categorias')
class CategoriasModel {
  @PrimaryGeneratedColumn('increment')
  id?: number;
  
  @Column({name:'nome_categoria'})
  nomeCategoria: string;
  
}

interface CategoriasCreate {
  nomeCategoria: string;
}

interface CategoriasCreateComplete {
  name: string;
}

let CategoriasCreateExemple : CategoriasCreate = {
  nomeCategoria: 'Calçados'
}

function CategoriasCreateSchema(isIdentified: Boolean): object {
  let content = {
    'type': 'object',
    'properties': {    
      'nome_categoria': {
        'type': 'string'
      },
      'id': {
        'type': 'string'
      }
    },
    "example": CategoriasCreateExemple
  }

  if (isIdentified) {
    return {
      "CategoriasCreate": content
    }
  }

  return content;
}

const CategoriasCreateReference= {
  '$ref': '#/components/schemas/CategoriasCreate'
}


export {
  CategoriasModel,
  CategoriasCreateComplete,
  CategoriasCreate, CategoriasCreateExemple, CategoriasCreateReference, CategoriasCreateSchema,
};