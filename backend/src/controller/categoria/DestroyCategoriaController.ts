import { Request, Response } from 'express';
import CategoriaRepository from '../../repository/CategoriaRepository';
import AncestralController from '../AncestralController';

class DestroyCategoriaController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntParam(req, 'id');
      await CategoriaRepository.deleteCategoria(id!);
      const categorias = await CategoriaRepository.getCategorias();
      this.success(res, categorias);
  }
}
  export default new DestroyCategoriaController;