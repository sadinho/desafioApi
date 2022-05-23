import { Request, Response } from 'express';
import CategoriaRepository from '../../repository/CategoriaRepository';
import AncestralController from '../AncestralController';

class UpdateCategoriaController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntBodyAtt(req, 'id');
      const nomeCategoria = await this.getStrBodyAtt(req, 'nomeCategoria');
      const categoriaParam = { id, nomeCategoria };
      await CategoriaRepository.updateCategoria(categoriaParam);
      const categorias = await CategoriaRepository.getCategorias();
      this.success(res, categorias);
  }
}
  
export default new UpdateCategoriaController;