import { Request, Response } from 'express';
import AncestralController from '../AncestralController';
import CategoriaRepository from '../../repository/CategoriaRepository';

class GetItemCategoriaController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntParam(req, 'id');
      const categoria = await CategoriaRepository.getCategoria(id!);
      this.success(res, categoria);
  }
}

export default new GetItemCategoriaController;