import { Request, Response } from 'express';
import ProdutoRepository from '../../repository/ProdutoRepository';
import AncestralController from '../AncestralController';

class UpdateProdutoController extends AncestralController {
  protected async execute(req: Request, res: Response): Promise<void | any> {
      const id = await this.getIntBodyAtt(req, 'id');
      const nomeProduto = await this.getStrBodyAtt(req, 'nomeProduto');
      const idCategoria = await this.getIntBodyAtt(req, 'idCategoria', false);
      const produtoParam = { id, nomeProduto, idCategoria };
      await ProdutoRepository.updateProduto(produtoParam);
      const produtos = await ProdutoRepository.getProdutos();
      this.success(res, produtos);
  }
}
  
export default new UpdateProdutoController;