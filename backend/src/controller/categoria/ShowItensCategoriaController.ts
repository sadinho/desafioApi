import { Request, Response } from 'express';
import AncestralController from '../AncestralController';
import CategoriasRepository from '../../repository/CategoriaRepository';

class ShowItensCategoriaController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const categoria = await CategoriasRepository.getCategorias();
      this.success(res, categoria);
     
  }
}

export default new ShowItensCategoriaController;