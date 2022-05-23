import { Request, Response } from 'express';
import CategoriasRepository from '../../repository/CategoriaRepository';
import AncestralController from '../AncestralController';

class CreateCategoriaController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const nomeCategoria = await this.getStrBodyAtt(req, 'nomeCategoria');
      await CategoriasRepository.createCategoria(nomeCategoria!);

      const categorias = await CategoriasRepository.getCategorias();
      this.success(res, categorias);
  }
}
  
export default new CreateCategoriaController;