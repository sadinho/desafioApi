import { Request, Response } from 'express';
import AncestralController from '../AncestralController';
import ProdutoRepository from '../../repository/ProdutoRepository';

class ShowItensProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const produtos = await ProdutoRepository.getProdutos();
      this.success(res, produtos);
     
  }
}

export default new ShowItensProdutoController;