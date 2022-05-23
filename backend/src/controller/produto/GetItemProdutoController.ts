import { Request, Response } from 'express';
import AncestralController from '../AncestralController';
import ProdutoRepository from '../../repository/ProdutoRepository';

class GetItemProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntParam(req, 'id');
      const produto = await ProdutoRepository.getProduto(id!);
      this.success(res, produto);
  }
}

export default new GetItemProdutoController;