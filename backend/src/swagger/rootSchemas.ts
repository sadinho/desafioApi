import { CategoriasCreateSchema } from '../model/CategoriasModel';
import { ProdutosCreateSchema } from '../model/ProdutosModel';


function buildSchemas(): object {
  return {
    ...CategoriasCreateSchema(true),
    ...ProdutosCreateSchema(true),
  };
}

export { buildSchemas }