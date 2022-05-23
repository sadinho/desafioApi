import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('produtos')
class ProdutosModel {
  @PrimaryGeneratedColumn('increment')
  id?: number;
  
  @Column({name:'nome_produto', type: 'varchar', length: 255, nullable: false})
  nomeProduto: string;

  @Column({ name: 'categoria_id' })
  idCategoria?: number;
  
}

interface ProdutosCreate {
  nomeProduto: string;
  idCategoria: number;
}

interface ProdutosCreateComplete {
  name: string;
}

let ProdutosCreateExemple : ProdutosCreate = {
  nomeProduto: 'Sapato masculino azul',
  idCategoria: 1
}

function ProdutosCreateSchema(isIdentified: Boolean): object {
  let content = {
    'type': 'object',
    'properties': {  
      'nome_produto': {
        'type': 'string'
      },
      'categoria_id': {
        'type': 'integer'
      },
    },
    "example": ProdutosCreateExemple
  }

  if (isIdentified) {
    return {
      "ProdutosCreate": content
    }
  }

  return content;
}

const ProdutosCreateReference= {
  '$ref': '#/components/schemas/ProdutosCreate'
}


export {
  ProdutosModel,
  ProdutosCreateComplete,
  ProdutosCreate,ProdutosCreateExemple, ProdutosCreateReference, ProdutosCreateSchema,
};