import { Request, Response } from 'express';
import ProdutoRepository from '../../repository/ProdutoRepository';
import AncestralController from '../AncestralController';

class DestroyProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntParam(req, 'id');
      const result = await ProdutoRepository.deleteProduto(id!);
      const produtos = await ProdutoRepository.getProdutos();
      this.success(res, produtos);
  }
}
  export default new DestroyProdutoController;